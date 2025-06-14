import { Profile } from "@superfaceai/passport-twitter-oauth2";

export class TwitterOauth2ResponseDto {
  accessToken: string;
  refreshToken: string;
  username: string;
  imageUrl?: string;
  profileId: string;
  profile: Profile;
  userId: number;
}
