export async function assertWebGpuSupport() {
  if (!navigator.gpu) {
    throw new Error('Carpet Cleaner Pro requires a WebGPU-capable browser and GPU. This device is not supported.');
  }

  const adapter = await navigator.gpu.requestAdapter({ powerPreference: 'high-performance' });
  if (!adapter) {
    throw new Error('A high-performance WebGPU adapter could not be initialized. This device is not supported.');
  }

  return adapter;
}
