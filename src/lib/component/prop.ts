export function Prop(opts?: {default: any}) {
  return function (target: any, key: string) {
    target.constructor.defaultProps = {...target.defaultProps || {}, [key]: opts?.default}

    target.constructor.getDerivedStateFromProps = (nextProps, prevState) => {
      if (nextProps[key] !== prevState[key]) {
        return ({ [key]: nextProps[key] })
      }
      return null
    }
  }
}
