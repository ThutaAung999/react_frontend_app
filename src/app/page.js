/*
import JsxAsProperty from "./components/JsxAsProperty";
import HelloWorld from "./components/HelloWorld";
*/
import TabDemo from "./components/tab/TabDemo"

export default function Home() {

    let date = new Date();

    let p = {
        name: 'Htein Linn',
        age: 43
    }

    let headers = ['Tab1', 'Tab2', 'Tab3']

    return (
        <main>
            <div>

                {/*{<Border>
                    <FirstLevel person={p}
                                another={"This is another property"}>
                        <h1>Children</h1>
                        <h2>Children-2</h2>
                    </FirstLevel>
                </Border>
                }*/}

                {/*<Border>
                  <Greeting
                      name={"Aung Nan Daw"}
                      person={{name:'Someone'}}
                  />

                  <Greeting/>
              </Border>*/}

                {/*<Border>
                    <HelloWorld/>
                </Border>*/}

                {/*{<JsxAsProperty tag={<HelloWorld/>}/>}*/}


                {/*<Profile admin={true}/>*/}

                {/*<NumberProblem/>*/}

                {/*{<ListDemo/>}*/}
                {/*{<TableDemo/>}*/}
                {/*{<TimeDemo date={date}/>}*/}
                {/*{<EventDemo/>}*/}
                {/*{<Counter/>}*/}
                {/*<hr/>
                {<Counter/>}*/}

                {/*<Parent/>*/}
                {/*<Timer/>*/}

                {/*<Snapshot/>*/}
                {/*<CounterProblem/>*/}
                {/*<EqualityDemo/>*/}
                {/*<TodoListDemo/>*/}
                {/*<FormDemo/>*/}
                <TabDemo headers={headers}>
                    <div>Page1</div>
                    <div>Page2</div>
                    <div>Page3</div>
                </TabDemo>
            </div>
        </main>
    );
}
