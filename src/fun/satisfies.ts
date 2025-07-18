const themeConfig = {
  primary: '#ff0000',
  secondary: '#00ff00',
  danger: '#ff5555',
} satisfies Record<string, string>;

type ConfigKey = keyof typeof themeConfig;

function getColorFor(key: ConfigKey) {
  return themeConfig[key];
}

export default function () {
  getColorFor('primary'); // ✔️ '#ff0000'
  getColorFor('danger'); // ✔️ '#ff5555'
  //getColorFor('warning');
}
