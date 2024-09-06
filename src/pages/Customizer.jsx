import React,{useState,useEffect} from 'react'
import { AnimatePresence,motion } from 'framer-motion'
import { useSnapshot } from 'valtio'

import config from '../config/config'
import state from '../store'
import {download, logoShirt, stylishShirt} from '../assets'
// import { donwloadCanvasToImage,reader} from '../config/helpers'
import { EditorTabs,FilterTabs,DecalTypes} from '../config/constants'
import { fadeAnimation,slideAnimation } from '../config/motion'

import { AIPicker,ColorPicker,CustomButton,FilePicker,Tab } from '../components'

const Customizer = () => {

    const snap = useSnapshot(state);

    const [file,setFile] = useState('');

    const [prompt,setPrompt] = useState('')
    const [generativeImg,setGenerativeImg] = useState(false)

    const [activeEditorTab,setActiveEditorTab] = useState('')
    const [activeFilterTab,setActiveFilterTab] = useState({
        logoShirt:true,
        stylishShirt:false,
    })


    const generateTabContent = ()=>{
        const conditions = {
            colorpicker:<ColorPicker/>,
            filepicker:<FilePicker/>,
            aipicker:<AIPicker/>
        }

        return conditions[activeEditorTab]!=undefined? conditions[activeEditorTab]:null

    }

  return (
    <AnimatePresence>
        {!snap.intro && (
            <>
                <motion.div key="custom" className={'absolute top-0 left-0 z-10'}>
                    <div className="flex items-center min-h-screen">
                        <div className="editortabs-container tabs">
                            {EditorTabs.map((tab,idx)=>(
                                <Tab
                                 key={tab.nome+'-'+idx}
                                 tab={tab}
                                 handleClick={()=>setActiveEditorTab(tab.name)}
                                 />
                            ))}
                            {generateTabContent()}
                        </div>
                    </div>
                </motion.div>
                <motion.div className="absolute z-10 top-5 right-5" {...fadeAnimation}>
                    <CustomButton 
                    type={'filled'}
                    title={'Go Back'}
                    handleClick={()=>{setActiveEditorTab(null),state.intro=true}}
                    customStyles={'w-fit px-4 op-2.5 font-bold text-sm'}
                    />
                </motion.div>
                <motion.div
            className='filtertabs-container'
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => handleActiveFilterTab(tab.name)}
              />
            ))}
                 </motion.div>
            </>
        )}
    </AnimatePresence>
  )
}
export default Customizer