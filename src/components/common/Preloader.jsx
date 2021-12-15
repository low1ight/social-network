import preloader from '../../assets/images/preloader.svg'
import gear from '../../assets/images/gear-preloader.svg'


function Preloader (props) {

    let preloaderType = props.preloaderType === 'gear' ? gear : preloader

    return (
        <div style={{margin:'0 auto', wight:`${props.weight || '20%'}`, height:`${props.height || '20%'}`}}>
            <img alt='preloader' style={{wight:'100%', height:'100%'}} src={preloaderType}/>
        </div>
    )
}

export default Preloader