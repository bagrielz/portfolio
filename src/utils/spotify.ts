export interface SpotifyCurrentlyPlaying {
  item: {
    name: string;
    artists: { name: string }[];
  };
  is_playing: boolean;
}

export async function getCurrentlyPlaying(
  accessToken: string
): Promise<SpotifyCurrentlyPlaying | null> {
  const response = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (response.status === 204 || response.status > 400) {
    return null; // Caso nada esteja tocando ou haja um erro
  }

  const data: SpotifyCurrentlyPlaying = await response.json();
  return data;
}
