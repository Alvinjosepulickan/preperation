import React from 'react'
type ListProps<T>={
    item :T[]
}
const GenericProp = <T extends {}>(prop:ListProps<T>) => {
  return (
    <div>GenericProp</div>
  )
}

export default GenericProp