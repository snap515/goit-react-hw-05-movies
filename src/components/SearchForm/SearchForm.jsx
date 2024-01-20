import css from './SearchForm.module.css'

export const SearchForm = ({ onSubmit, query }) => {

  return (
    <div className={css.formWrapper}>
      <form className={css.form} onSubmit={onSubmit}>
        <input className={css.formInput}
          type="text"
          autoComplete="off"
          autoFocus
          name='searchText'
          defaultValue={query}
        />
        <button className={css.formButton} type="submit">
          <span className={css.buttonText}>Search</span>
        </button>
        
      </form>
    </div>
  )
}