import { useDispatch, useSelector } from "react-redux"
import {
  setTitleFilter,
  setAuthorFilter,
  resetFilters,
  selectTitleFilter,
  selectAuthorFilter,
} from "../../redux/slices/filterSlice"
import "./Filter.css"

const Filter = () => {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)

  function handleTitleFilterChange(e) {
    dispatch(setTitleFilter(e.target.value))
  }

  function handleAuthorFilterChange(e) {
    dispatch(setAuthorFilter(e.target.value))
  }

  function handleResetFilters() {
    dispatch(resetFilters())
  }

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            onChange={handleTitleFilterChange}
            value={titleFilter}
            type="text"
            placeholder="Filter by title..."
          />
        </div>
        <div className="filter-group">
          <input
            onChange={handleAuthorFilterChange}
            value={authorFilter}
            type="text"
            placeholder="Filter by author..."
          />
        </div>
        <button type="button" onClick={handleResetFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  )
}

export default Filter
