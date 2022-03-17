import './index.css'

const TabItem = props => {
  const {tabDetails, changeActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails
  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  const changeId = () => {
    changeActiveTabId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={changeId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
