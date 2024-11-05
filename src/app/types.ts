export type Post = {
  post_id: number;
  post_title: string;
  posting_date: Date;
  wowhead_url: string;
  username: string;
};

export type Comment = {
  comment_id: number;
  comment_text: string;
  comment_date: Date;
  username: string;
};


export type UserComment = {
  comment_id: number;
  comment_text: string;
  comment_date: Date;
  post_id: number;
  post_title: string;
}