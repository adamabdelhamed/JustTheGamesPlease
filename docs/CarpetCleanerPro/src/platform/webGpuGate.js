export async function assertWebGpuSupport() {
  if (!window.isSecureContext) {
    throw new WebGpuCapabilityError(
      'insecure-context',
      'WebGPU requires HTTPS or localhost. This HTTP network address is not a secure browser context.'
    );
  }

  if (!navigator.gpu) {
    throw new WebGpuCapabilityError(
      'api-unavailable',
      'WebGPU is unavailable. Use a current Chrome or Edge browser with hardware acceleration enabled.'
    );
  }

  let adapter;
  try {
    adapter = await navigator.gpu.requestAdapter({ powerPreference: 'high-performance' });
  } catch (cause) {
    throw new WebGpuCapabilityError('adapter-error', 'The browser failed while requesting a WebGPU adapter.', cause);
  }

  if (!adapter) {
    throw new WebGpuCapabilityError(
      'adapter-unavailable',
      'No WebGPU adapter was available. Check browser GPU settings, drivers, and hardware acceleration.'
    );
  }

  return { adapter, info: readAdapterInfo(adapter) };
}

function readAdapterInfo(adapter) {
  const info = adapter.info ?? {};
  const limitNames = [
    'maxTextureDimension2D',
    'maxStorageBufferBindingSize',
    'maxComputeWorkgroupStorageSize'
  ];
  return {
    description: info.description || info.device || info.architecture || 'High-performance adapter',
    limits: Object.fromEntries(limitNames.map(name => [name, adapter.limits?.[name]]))
  };
}

export class WebGpuCapabilityError extends Error {
  constructor(code, message, cause) {
    super(message, { cause });
    this.name = 'WebGpuCapabilityError';
    this.code = code;
  }
}
