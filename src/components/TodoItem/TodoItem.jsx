

export default function TodoItem() {
  return (
    <li className='flex text-white bg-blue-900 p-3 rounded'>
            <div className='flex-1'><span>1. Lorem, ipsum dolor.</span></div>
            <div className='flex-1 flex justify-end'><button>Delete</button></div>
    </li>
  )
}
