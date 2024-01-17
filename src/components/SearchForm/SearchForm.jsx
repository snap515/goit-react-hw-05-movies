export const SearchForm = ({ onSubmit, query }) => {

  return (
    <div>
      <form onSubmit={onSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          name='searchText'
          defaultValue={query}
        />
      </form>
    </div>
  )
}