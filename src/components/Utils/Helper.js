export function filteredData (searchText, restarunt){
    const filterData = restarunt.filter((restarunt) => 
    restarunt?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    )
  }
  