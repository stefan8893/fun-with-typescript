const someObjectWithReleases = {
  releases: [
    {
      version: '1.0.0',
      date: '2023-10-01',
      features: ['Initial release', 'Basic functionality'],
    },
    {
      version: '1.1.0',
      date: '2023-11-01',
      features: ['Added new feature', 'Improved performance'],
    },
  ],
};

type Unarray<T> = T extends Array<infer U> ? U : T;

type Release = Unarray<(typeof someObjectWithReleases)['releases']>;

export default function () {
  const release: Release = {
    date: '2023-10-01',
    version: '1.2.3',
    features: [],
  };

  console.log(release);
}
