export const ToolbarButton = (button) => {

  return (
    <button onClick = {evt => button.onSelectFilter(button.filter)} className = {button.filter === button.selected ? 'selected' : ''}>{button.filter}</button>
  )
}
