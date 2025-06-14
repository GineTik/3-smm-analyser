export class CreateConnectionDto {
  socialNetworkId: number;
  accessToken: string;
  refreshToken: string;
  profileId: string;
  username?: string;
  imageUrl?: string;
}
