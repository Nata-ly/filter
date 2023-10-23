import { ToolbarButton } from './ToolbarButton'

export const Toolbar = (data) => {

  return (
    <div>

      {data.filters.map(filter => (
        <ToolbarButton filter = {filter} selected = {data.selected} onSelectFilter={data.onSelectFilter} />
      ))}
    </div>
  )
}
