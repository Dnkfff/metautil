import { EventEmitter } from 'events';
import { IncomingMessage } from 'http';

export function cryptoRandom(): number;
export function generateKey(length: number, possible: string): string;
export function crcToken(secret: string, key: string): string;
export function md5(fileName: string): Promise<string>;

export function generateToken(
  secret: string,
  characters: string,
  length: number,
): string;

export function validateToken(secret: string, token: string): boolean;
export function hashPassword(password: string): Promise<string>;

export function validatePassword(
  password: string,
  serHash: string,
): Promise<boolean>;

export function random(min: number, max?: number): number;
export function sample(arr: Array<any>): any;
export function ipToInt(ip?: string): number;
export function parseHost(host?: string): string;
export function parseParams(params: string): object;
export function replace(str: string, substr: string, newstr: string): string;
export function split(s: string, separator: string): [string, string];
export function fileExt(fileName: string): string;
export function parsePath(relPath: string): Array<string>;
export function between(s: string, prefix: string, suffix: string): string;
export function isFirstUpper(s: string): boolean;
export function isFirstLower(s: string): boolean;
export function isFirstLetter(s: string): boolean;
export function toLowerCamel(s: string): string;
export function toUpperCamel(s: string): string;
export function toLower(s: string): string;
export function toCamel(separator: string): (s: string) => string;
export function spinalToCamel(s: string): string;
export function snakeToCamel(s: string): string;
export function isConstant(s: string): boolean;
export function isHashObject(o: string | number | boolean | object): boolean;
export function nowDate(date?: Date): string;
export function nowDateTimeUTC(date?: Date, timeSep?: string): string;
export function duration(s: string | number): number;
export function bytesToSize(bytes: number): string;
export function sizeToBytes(size: string): number;
export function namespaceByPath(namespace: object, path: string): object | null;

type Every = {
  DD: number;
  MM: number;
  YY: number;
  wd: number;
  dd: number;
  hh: number;
  mm: number;
  ms: number;
};

export type { Every };

export function parseDay(s: string): number;
export function parseMonth(s: string): number;
export function parseEvery(s: string): Every;
export function nextEvent(every: Every, date?: Date): number;
export function makePrivate(instance: object): object;

export function protect(
  allowMixins: Array<string>,
  ...namespaces: Array<object>
): void;

export function parseCookies(cookie: string): object;

export interface AbortController {
  abort: Function;
  signal: EventEmitter;
}

export function createAbortController(): AbortController;
export function timeout(msec: number, signal?: EventEmitter): Promise<void>;
export function delay(msec: number, signal?: EventEmitter): Promise<void>;

export interface QueueElement {
  resolve: Function;
  timer: NodeJS.Timer;
}

export class Semaphore {
  constructor(concurrency: number, size?: number, timeout?: number);
  concurrency: number;
  counter: number;
  timeout: number;
  size: number;
  empty: boolean;
  queue: Array<QueueElement>;
  enter(): Promise<void>;
  leave(): void;
}

export class Pool {
  constructor(options: { timeout?: number });
  items: Array<object>;
  free: Array<boolean>;
  queue: Array<object>;
  current: number;
  size: number;
  available: number;
  timeout: number;
  next(): Promise<object | null>;
  add(item: object): void;
  capture(): Promise<object | null>;
  release(item: object): void;
  isFree(item: object): boolean;
}

export type FetchOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: object;
  body?: object;
};

export function fetch(url: string, options?: FetchOptions): Promise<object>;
export function jsonParse(buffer: Buffer): object | null;
export function receiveBody(req: IncomingMessage): Promise<Buffer | null>;
export function flatObject(
  sourceObject: object,
  fieldNames: Array<string>,
): object;
export function unflatObject(
  sourceObject: object,
  fieldNames: Array<string>,
): object;

export function isError(instance: object): boolean;
