export function Component(target) {
  const methods = Object.entries(Object.getOwnPropertyDescriptors(target.prototype))
  const component = class extends target {

    constructor(props) {
      super(props)

      // bind state
      Object.getOwnPropertyNames(this).forEach(prop => {
        const isProp = !['props', 'updater', 'refs', 'state', 'context'].includes(prop)
        if (isProp) {
          this.state = {...this.state || {}, [prop]: this[prop] }
          delete this[prop]

          Object.defineProperty(this, prop, {
            get() {return this.state[prop]},
            set(val) {this.setState({[prop]: val})}
          })
        }
      })

      // bind methods
      methods.forEach(([key, descriptor]) => {
        if (key !== 'constructor' && descriptor.value && typeof descriptor.value === 'function') {
          this[key] = this[key].bind(this)
        }
      })
    }

  }
  return component as any // not sure how to pass original class generic to decorator?
}

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
