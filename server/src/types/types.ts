export interface FlatRecordCustom {
  name: string;
  url: string;
}
export interface Flat {
  name: string;
  _links: {
    images: Image[];
  };
}
interface Image {
  href: string;
}
