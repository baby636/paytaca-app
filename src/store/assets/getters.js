export function getAssets (state) {
  return state.assets
}

export function getAsset (state) {
  return function (id) {
    return state.assets.filter(function (asset) {
      if (asset && asset.id === id) {
        return asset
      }
    })
  }
}
