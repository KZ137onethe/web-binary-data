// 创建一个二进制缓冲区，但不能直接访问（黑盒）
const buffer = new ArrayBuffer(16);
console.log(buffer.byteLength);

const view = new Uint16Array(buffer);
