declare module "reading-time" {
  export = reading_time;

  interface Stats {
    minutes: number;
  }

  declare function reading_time(text: string, options?: any): Stats;
}
