import './index.css'

const TabItem = props => {
  const {tabDetails, activeTabId, updateActiveTabId} = props
  const {tabId, displayText} = tabDetails
  let buttonClass
  if (activeTabId === tabId) {
    buttonClass = 'tab-btn selected-tab'
  } else {
    buttonClass = 'tab-btn'
  }
  const updateActiveTab = () => {
    updateActiveTabId(tabId)
  }
  return (
    <li className="tab-item">
      <button type="button" className={buttonClass} onClick={updateActiveTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
