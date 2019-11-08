import React from 'react'
import {Panel, PanelHeader, Button, Group, Div, Cell, Avatar} from '@vkontakte/vkui'
import connect, {UserInfo} from '@vkontakte/vk-connect'


export default class Home extends React.Component<{
	id: string
	go: (id: string) => void
	fetchedUser: UserInfo | null
}> {
    get canVibrate() {
        return !!navigator.vibrate || connect.supports('VKWebAppTapticImpactOccurred')
    }

    vibrate = () => {
        if (navigator.vibrate) {
            navigator.vibrate(200)
        }
        else if (connect.supports('VKWebAppTapticImpactOccurred')) {
            connect.sendPromise('VKWebAppTapticImpactOccurred', {style: 'medium'})
        }
    }

    render() {
        const {id, go, fetchedUser} = this.props
        return (
        	<Panel id={id}>
                <PanelHeader>Коснуться</PanelHeader>
                {fetchedUser &&
					<Group>
						<Cell
							before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
							description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
						>
							{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
						</Cell>
					</Group>
                }

                <Group title={`V: ${!!navigator.vibrate}, T: ${connect.supports('VKWebAppTapticImpactOccurred')}, T2: ${connect.supports('VKWebAppTapticNotificationOccurred')}`}>
                    <Div>
                        <Button size="xl" level="2" onClick={() => go('search')}>
                            Выбрать из друзей
                        </Button>
                    </Div>
                    <Div>
                        {this.canVibrate && <Button size="xl" level="2" onClick={this.vibrate}>
                            Вибрация
                        </Button>}
                    </Div>
                </Group>
            </Panel>
        )
    }
}
