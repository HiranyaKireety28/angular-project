export interface Ad {
  id: number;
  imageSource: string;
  title: string;
}

export interface AdContainer {
  id: number;
  title: string;
  linkName?: string;
  linkURL?: string;
  ads?: Ad[];
  buttonName?: string;
  buttonURL?: string;
}
