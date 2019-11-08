import React, {useState, useEffect} from 'react'
import connect, {UpdateConfigData, UserInfo} from '@vkontakte/vk-connect'
import {View, ScreenSpinner} from '@vkontakte/vkui'

import '@vkontakte/vkui/dist/vkui.css'

import Home from './panels/Home'
import Search from './panels/Search'

const App = () => {
    const [activePanel, setActivePanel] = useState('home')
    const [fetchedUser, setUser] = useState<null | UserInfo>(null)
    const [popout, setPopout] = useState<JSX.Element | null>(<ScreenSpinner size='large'/>)

    useEffect(() => {
        connect.subscribe(({detail: {type, data}}) => {
            if (type === 'VKWebAppUpdateConfig') {
                const schemeAttribute = document.createAttribute('scheme')
                schemeAttribute.value = (data as UpdateConfigData).scheme || 'client_light'
                document.body.attributes.setNamedItem(schemeAttribute)
            }
        })

        async function fetchData() {
            const user = await connect.sendPromise('VKWebAppGetUserInfo')
            setUser(user)
            setPopout(null)
        }

        fetchData()
    }, [])

    return (
        <View activePanel={activePanel} popout={popout}>
            <Home id='home' fetchedUser={fetchedUser} go={setActivePanel}/>
            <Search id='search' go={setActivePanel}/>
        </View>
    )
}

export default App

