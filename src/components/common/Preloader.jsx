import preloader from '../../assets/images/preloader.svg'



function Preloader (props) {
    return (
        <div style={{margin:'0 auto', wight:`${props.weight || '20%'}`, height:`${props.height || '20%'}`}}>
            <img alt='preloader' style={{wight:'100%', height:'100%'}} src={preloader}/>
        </div>
    )
}

export default Preloader