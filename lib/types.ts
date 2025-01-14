export type GlobalThis = Partial<Global> & { [key in CommonKeys]: Global[key] };

type Global = typeof globalThis;

export type CommonKeys =
  | "undefined"
  | "globalThis"
  | "eval"
  | "parseInt"
  | "parseFloat"
  | "isNaN"
  | "isFinite"
  | "decodeURI"
  | "decodeURIComponent"
  | "encodeURI"
  | "encodeURIComponent"
  | "escape"
  | "unescape"
  | "NaN"
  | "Infinity"
  | "Symbol"
  | "Object"
  | "Function"
  | "String"
  | "Boolean"
  | "Number"
  | "Math"
  | "Date"
  | "RegExp"
  | "Error"
  | "EvalError"
  | "RangeError"
  | "ReferenceError"
  | "SyntaxError"
  | "TypeError"
  | "URIError"
  | "JSON"
  | "Array"
  | "Promise"
  | "ArrayBuffer"
  | "DataView"
  | "Int8Array"
  | "Uint8Array"
  | "Uint8ClampedArray"
  | "Int16Array"
  | "Uint16Array"
  | "Int32Array"
  | "Uint32Array"
  | "Float32Array"
  | "Float64Array"
  | "Intl"
  | "Map"
  | "WeakMap"
  | "Set"
  | "WeakSet"
  | "Proxy"
  | "Reflect"
  | "SharedArrayBuffer"
  | "Atomics"
  | "BigInt"
  | "BigInt64Array"
  | "BigUint64Array"
  | "AggregateError"
  | "WeakRef"
  | "FinalizationRegistry"
  | "Buffer"
  | "structuredClone"
  | "fetch"
  | "console"
  | "AbortController"
  | "AbortSignal"
  | "DOMException"
  | "Request"
  | "Response"
  | "FormData"
  | "Headers"
  | "MessageEvent"
  | "WebSocket"
  | "atob"
  | "btoa"
  | "Blob"
  | "File"
  | "crypto"
  | "Event"
  | "EventTarget"
  | "PerformanceEntry"
  | "PerformanceMark"
  | "PerformanceMeasure"
  | "PerformanceObserver"
  | "PerformanceObserverEntryList"
  | "PerformanceResourceTiming"
  | "performance"
  | "ByteLengthQueuingStrategy"
  | "CompressionStream"
  | "CountQueuingStrategy"
  | "DecompressionStream"
  | "ReadableByteStreamController"
  | "ReadableStream"
  | "ReadableStreamBYOBReader"
  | "ReadableStreamBYOBRequest"
  | "ReadableStreamDefaultController"
  | "ReadableStreamDefaultReader"
  | "TextDecoderStream"
  | "TextEncoderStream"
  | "TransformStream"
  | "TransformStreamDefaultController"
  | "WritableStream"
  | "WritableStreamDefaultController"
  | "WritableStreamDefaultWriter"
  | "setTimeout"
  | "clearTimeout"
  | "setInterval"
  | "clearInterval"
  | "queueMicrotask"
  | "URLSearchParams"
  | "URL"
  | "TextDecoder"
  | "TextEncoder"
  | "BroadcastChannel"
  | "MessageChannel"
  | "MessagePort";
