import data from '../Assets/datas/articles.json'
import Articles from './Articles'

const ArticlesShow = () => {

    return (
        <div className='majorListParent'>
            {data.map((send, index) => {
                // let number = data.findIndex(obj => obj.name == send.title);
                return (<Articles key={index} check={index} pTitle={send.title} />)
            }
            )}
        </div>
    )
}

export default ArticlesShow;