export interface Ad {
  imageSource: string;
  title: string;
}

export interface AdContainer {
  title: string;
  linkName?: string;
  linkURL?: string;
  ads?: Ad[];
  buttonName?: string;
  buttonURL?: string;
}
