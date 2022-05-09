export function Watch(property: string) {
  return function (target, handlerKey, handler) {
    target.watchers = {...(target.watchers || {}), [property]: handlerKey}
    target.componentDidUpdate = function (this, prevProps, prevState) {
      Object.keys(target.watchers).forEach(key => {
        if (prevState[key] !== this[key]) this[handlerKey](this[key], prevState[key])
      })
    }
  }
}