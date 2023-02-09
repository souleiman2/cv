export interface ITimelineItem {
  year: string;
  content: Experience[];
}

export interface Experience {
  title: String;
  subTitle: String | null;
  elemList: String[] | null;
  time: String | null;
  sum? : string
}
