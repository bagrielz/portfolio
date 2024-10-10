interface SpotifyArtist {
  name: string;
}

interface SpotifyAlbum {
  images: { url: string }[];
}

interface SpotifyTrack {
  name: string;
  artists: SpotifyArtist[];
  album: SpotifyAlbum;
}

interface SpotifyCurrentlyPlayingResponse {
  item: SpotifyTrack;
}

// Função para obter o token de acesso
export async function getSpotifyAccessToken() {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(
        `${client_id}:${client_secret}`,
      ).toString('base64')}`,
    },
    body: 'grant_type=client_credentials',
  });

  const data = await response.json();
  return data.access_token;
}

// Função para buscar a música atual tocando
export async function getCurrentlyPlaying(accessToken: string) {
  const response = await fetch(
    'https://api.spotify.com/v1/me/player/currently-playing',
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  if (response.status === 204 || response.status > 400) {
    return null; // Nenhuma música está tocando
  }

  const data: SpotifyCurrentlyPlayingResponse = await response.json();
  return {
    song: data.item.name,
    artist: data.item.artists.map((artist) => artist.name).join(', '),
    albumImageUrl: data.item.album.images[0].url,
  };
}
