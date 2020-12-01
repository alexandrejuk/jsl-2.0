import React, { Fragment } from 'react'
import {
  CardImplement,
  CardSkeleton,
  Filters,
} from '../../Components'
import Styles from './style.module.css'

const items = [1, 2, 3, 4, 5, 6, 7]
const Manager = ({
  data,
  filterSelected,
  goToDetail,
  HandleFilter,
  loading,
  statusTranslate,
  priorityTranslate,
}) => {
  const renderCardImplement = implement => (
   <div
    className={Styles.implementItem}
    key={implement.id}
  >
    <CardImplement
        goToDetail={goToDetail}
        {...implement}
        statusTranslate={statusTranslate}
        priorityTranslate={priorityTranslate}
      />
   </div>
  )
  return (
    <Fragment>
      <div className={Styles.header}>
        <h1>Gerenciamento</h1>
      </div>
      <div className={Styles.container}>
        <Filters filterSelected={filterSelected} HandleFilter={HandleFilter} />
        {loading && items.map(item => (
          <div className={Styles.implementItem} key={item} >
            <CardSkeleton />
          </div>)
        )}
        {data.map(renderCardImplement)}
      </div>
    </Fragment>
  )
}

export default Manager
