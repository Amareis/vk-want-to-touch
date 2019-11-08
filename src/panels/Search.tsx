import React, {FunctionComponent} from 'react'
import {platform, IOS} from '@vkontakte/vkui'
import {Panel,PanelHeader, HeaderButton} from '@vkontakte/vkui'

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back'
import Icon24Back from '@vkontakte/icons/dist/24/back'

import persik from '../img/persik.png'
import './Persik.css'

const osName = platform()

const Search: FunctionComponent<{id: string, go: (id: string) => void}> = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<HeaderButton onClick={() => props.go('home')}>
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </HeaderButton>}
        >
            Persik
        </PanelHeader>
        <img className="Persik" src={persik} alt="Persik The Cat"/>
    </Panel>
)

export default Search
