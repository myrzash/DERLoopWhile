const DATAS = {
    ru: {
        title: "Цикл с предусловием",
        grade: "8 Класс",
        typeder: "Интерактивная лекция",
        prologue: {
            author: 'Марк Цукерберг',
            phrase: 'Я думаю, что в будущем все, а не только программисты будут связаны с элементами программирования',
        },
        parts: [
            {
                title: 'Изучи',
                info: 'Чтобы научится программировать необходимо знать синтаксис языка',
                image: 'a1.jpg',
                interactive: {
                    name: 'lecture',
                    items: {
                        shape: {
                            title: 'Изучи',
                            subTitle: 'Цикл|с предусловием',
                            bg: {
                                parallax: 'public/1/k1.jpg',
                                // video: 'public/video4.mp4',
                                height: 800
                            }
                        },
                        views: [
                            {
                                name: 'm-text',
                                title: 'Цикл',
                                big: true,
                                text: ['Это многократно повторяющаяся последовательность действий. ']
                            },
                            {
                                name: 'm-video',
                                src: 'public/1/nature.mp4',
                                isImage: true,
                                bg: 'public/1/v1.png',
                                backgroundColor: '#cbe7ff',
                            }, {
                                name: 'm-video',
                                src: 'public/1/system.mp4',
                                isImage: true,
                                bg: 'public/1/v2.png',
                                backgroundColor: '#f38586',
                            }, {
                                name: 'm-text',
                                title: 'Цикл',
                                big: true,
                                text: ['Последовательность действий, которые повторяются в цикле, называют <b>телом цикла</b>. Один проход цикла называют <b>шагом</b>, или итерацией. Переменные, которые изменяются внутри цикла и влияют на его окончание, называются <b>параметрами</b> цикла.',
                                    'При написании циклических алгоритмов следует помнить следующее:',
                                    '<b>Во-первых</b>, чтобы цикл имел шанс когда-нибудь закончиться, содержимое его тела должно обязательно влиять на условие цикла.',
                                    '<b>Во-вторых</b>, условие должно состоять из корректных выражений и значений, определенных еще до первого выполнения тела цикла.']
                            },
                            [
                                {
                                    name: 'm-image',
                                    src: 'public/1/kt1_ru.png'
                                },
                                {
                                    name: 'm-text',
                                    title: 'While Do',
                                    big: true,
                                    text: ['Один из циклов, используемых в программировании называется <b>While...Do</b> (делай пока верно условие).']
                                },
                            ],
                            [
                                {
                                    name: 'm-text',
                                    extra: '<div class="font700 display-2 light-blue--text text--darken-3"><p>while <span  class="font300 black--text mr-2 ml-2">условие</span> do</p>' +
                                    '<p>begin</p>' +
                                    '<p class="green--text text--darken-2 font300">//   тело цикла</p>' +
                                    '<p>end;</p></div>'
                                },
                                {
                                    name: 'm-text',
                                    big: true,
                                    text: ['Работает оператор <b>while</b> следующим образом. Вычисляется значение выражения. Если оно истинно (<b>True</b>), выполняется оператор. В противном случае цикл заканчивается, и управление передается оператору, следующему за телом цикла. Выражение вычисляется перед каждой итерацией цикла. Если при первой проверке выражение ложно (<b>False</b>), цикл не выполнится ни разу.']
                                },
                            ],
                            [
                                {
                                    name: 'm-text',
                                    big: true,
                                    title: 'Составной оператор',
                                    text: ['Если в цикле надо выполнить более одного оператора, необходимо использовать <b>составной оператор</b>']
                                },
                                {
                                    name: 'm-text',
                                    extra: '<div class="font700 display-1 blue--text"><p>while <span  class="font300 black--text mr-2 ml-2">условие</span> do</p>' +
                                    '<p>begin</p>' +
                                    '<p class="font300 black--text">оператор_1;</p>' +
                                    '<p class="font300 black--text">оператор_2;</p>' +
                                    '<p class="font300 black--text">...</p>' +
                                    '<p class="font300 black--text">оператор_n;</p>' +
                                    '<p>end;</p></div>'
                                }
                            ]
                        ],
                    }
                }
            },
            {
                title: 'Как работает цикл?',
                info: 'Демонстрация работы цикла в программе, написанной на языке программирования',
                image: 'a2.jpg',
                interactive: {
                    name: 'lecture',
                    items: {
                        shape: {
                            title: 'Как работает|цикл в программе?',
                            subTitle: 'Цикл|с предусловием',
                            bg: {
                                parallax: 'public/2/k1.jpg',
                                // video: 'public/video4.mp4',
                                height: 800,
                            }
                        },
                        views: [
                            {
                                name: 'm-text',
                                big: true,
                                title: 'При решении задач следует учесть следующее:',
                                text: ['Особенностью цикла с предусловием является то, что он может не выполниться ни разу - это произойдёт, если указанное условие изначально будет ложным. При этом, цикл может и стать "вечным" - если условие никогда не примет значения False. Именно поэтому следует следить за тем, чтобы всегда присутствовали условия для завершения работы цикла.']
                            },
                            [{
                                name: 'm-image',
                                backgroundColor: '#cbe7ff',
                                src: 'public/2/kt1.png',
                                cover: false,
                            }, {
                                name: 'm-text',
                                title: 'Пример',
                                text: ['В качестве примера рассмотрим следующую задачу.',
                                    'Сейчас нам нужно открыть <b>Delphi</b> или <b>Lazarus</b> и создать новый проект.',
                                    '1. Расположить на форме компоненты <b>Button</b> и <b>Label</b>: ',
                                    '2. Создать на кнопке процедуру <b>OnClick</b> и ввести переменную A типа <b>Integer</b>;',
                                    '3. Теперь между ключевыми словами <b>begin</b> и <b>end</b> установить значение переменной A равное 1: <b>A:=1;</b>',
                                    '4. Написать цикл, с условием <b>A<>100</b>, то есть пока A не равно <b>100</b> будет выполняться цикл. Если же <b>А = 100</b> - цикл остановится.']
                            }], {
                                name: 'm-text',
                                big: true,
                                title: 'Общий вид кода:',
                                extra: '<div class="font700 headline blue--text">procedure <label class="font300 black--text">TForm1.Button1Click(Sender: TObject);</label><br/>' +
                                'var   <label class="font300 black--text">A</label>:integer;<br/>' +
                                'begin<br/>' +
                                '<label class="font300 black--text">A:=1;</label> <span class="green--text text--darken-2 font300">//Присваиваем единицу</span><br/>' +
                                'While <label class="font300 black--text">A <> 100</label> do <span class="green--text text--darken-2 font300">//Пока А не равно 100 - делаем</span><br/>' +
                                'begin<br/>' +
                                '<label class="font300 black--text">A:=A+1;</label> <span class="green--text text--darken-2 font300">//прибавляем единицу</span><br/>' +
                                '<label class="font300 black--text">Label1.Caption:=IntToStr(a);</label> <span class="green--text text--darken-2 font300">//Выводим значение А</span><br/>' +
                                'end;<br/>' +
                                'end;</div>'
                            }, {
                                name: 'm-text',
                                big: true,
                                text: ['Для того, чтобы увидеть как работает цикл пошагово:',
                                    'Дописать после строки: <b>Label1.Caption:=IntToStr(a);</b>',
                                    'Вот эти две строчки: ',
                                    '<b>Application.ProcessMessages;</b>',
                                    '<b>sleep(100);</b>',
                                    'Они делают следующие: ',
                                    '<b>Application.HandleMessage</b> - это метод, позволяющий выводить значения переменных во время работы цикла. Не смотря на то, что мы и так выводим переменную в лабел, этот метод необходим.',
                                    '<b>sleep(100)</b> - функция Sleep() говорит программе, что нужно поспать, как бы заморозиться на какое-то количество миллисекунд. Миллисекунды указываются в скобках. В секунде 1000 миллисекунд.']
                            }, {
                                name: 'm-text',
                                big: true,
                                title: 'Общий вид кода:',
                                extra: '<div class="font700 headline blue--text">procedure <label class="font300 black--text">TForm1.Button1Click(Sender: TObject);</label><br/>' +
                                'var   <label class="font300 black--text">A</label>:integer;<br/>' +
                                'begin<br/>' +
                                '<label class="font300 black--text">A:=1;</label> <span class="green--text text--darken-2 font300">//Присваиваем единицу</span><br/>' +
                                'While <label class="font300 black--text">A <> 100</label> do <span class="green--text text--darken-2 font300">//Пока А не равно 100 - делаем</span><br/>' +
                                'begin<br/>' +
                                '<label class="font300 black--text">A:=a+1;</label> <span class="green--text text--darken-2 font300">//прибавляем единицу</span><br/>' +
                                '<label class="font300 black--text">Label1.Caption:=IntToStr(a);</label> <span class="green--text text--darken-2 font300">//Выводим значение А</span><br/>' +
                                '<label class="font300 black--text">Application.ProcessMessages;</label><br/>' +
                                '<label class="font300 black--text">sleep(100);</label><br/>' +
                                'end;<br/>' +
                                'end;</div>'
                            }, {
                                name: 'm-video',
                                src: 'public/2/work_of_cycle.mp4',
                                full: true,
                                bg: 'public/2/v1.jpg',
                            },
                        ]
                    }
                }
            },
            {
                title: 'Проверь себя',
                image: 'part3.png',
                info: 'Выполни ручную трассировку и определи результат выполнения цикла',
                interactive:
                    {
                        name: 'cycle',
                        items: {
                            task: 'Определить значение переменной S после выполнения следующих команд:'
                        }
                    }
            }
        ]
    },
    kz: {
        title: "Алғышарты бар цикл",
        grade: "8-сынып",
        typeder: "Интерактивті лекция",
        prologue: {
            author: 'Марк Цукерберг',
            phrase: 'Менің ойымша келешекте тек программа әзірлеушілер ғана емес, барлығы программалаумен байланысты болады',
        },
        parts: [
            {
                title: 'Ізден',
                info: 'Программалауды үйрену үшін тіл синтаксисін білу қажет.',
                image: 'a1.jpg',
                interactive: {
                    name: 'lecture',
                    items: {
                        shape: {
                            title: 'Ізден',
                            subTitle: 'Алғышарты бар цикл',
                            bg: {
                                parallax: 'public/1/k1.jpg',
                                height: 800,
                            }
                        },
                        views: [
                            {
                                name: 'm-text',
                                title: 'Цикл',
                                big: true,
                                text: ['Бұл әрекеттердің бірнеше рет қайталанатын тізбегі.']
                            },
                            {
                                name: 'm-video',
                                src: 'public/1/nature.mp4',
                                isImage: true,
                                bg: 'public/1/v1.png',
                                backgroundColor: '#cbe7ff',
                            }, {
                                name: 'm-video',
                                src: 'public/1/system.mp4',
                                isImage: true,
                                bg: 'public/1/v2.png',
                                backgroundColor: '#f38586',
                            }, {
                                name: 'm-text',
                                title: 'Цикл',
                                big: true,
                                text: ['Циклде қайталанатын әрекеттер тізбегі цикл денесі деп аталады. Циклдің бір рет өтуін қадам немесе итерация деп атайды. Цикл ішінде өзгеретін және оның аяқталуына әсер ететін айнымалылар цикл параметрлері деп аталады.',
                                    'Циклдік алгоритмдерді жазу кезінде келесілерді ұмытпаған жөн.',
                                    'Біріншіден, циклдің қашан болмасын аяқталуы үшін оның денесінің мазмұны цикл шартына міндетті түрде әсер етуі тиіс.',
                                    'Екіншіден, шарт цикл денесін алғаш орындағанға дейін анықталып қойылған дұрыс өрнектер мен мәндерден тұруы тиіс.']
                            },
                            [
                                {
                                    name: 'm-image',
                                    src: 'public/1/kt1_kz.png'
                                },
                                {
                                    name: 'm-text',
                                    title: 'While Do',
                                    big: true,
                                    text: ['Программалауда қолданылатын циклдердің бірі <b>While...Do</b> (шарт дұрыс болған кезде жаса) деп аталады.']
                                },
                            ],
                            [
                                {
                                    name: 'm-text',
                                    extra: '<div class="font700 display-2 light-blue--text text--darken-3"><p>while <span  class="font300 black--text mr-2 ml-2">шарт</span> do</p>' +
                                    '<p>begin</p>' +
                                    '<p class="green--text text--darken-2 font300">// цикл денесі</p>' +
                                    '<p>end;</p></div>'
                                },
                                {
                                    name: 'm-text',
                                    big: true,
                                    text: ['while оператор келесі тәсілмен жұмыс жасайды. Өрнек мәні есептеледі. Егер ол шынайы (True) болса, оператор орындалады. Керісінше жағдайда, цикл аяқталады және басқару цикл денесінен кейінгі операторға беріледі. Өрнек циклдің әр итерациясы алдында есептеледі. Егер алғашқы тексеру кезінде өрнек жалған (False) болса, цикл бір де бір рет орындалмайды.']
                                },
                            ],
                            [
                                {
                                    name: 'm-text',
                                    big: true,
                                    title: 'Құрама оператор',
                                    text: ['Егер циклде бірнеше операторды орындау қажет болса, құрама операторды қолдану қажет:']
                                },
                                {
                                    name: 'm-text',
                                    extra: '<div class="font700 display-1 blue--text"><p>while <span  class="font300 black--text mr-2 ml-2">шарт</span> do</p>' +
                                    '<p>begin</p>' +
                                    '<p class="font300 black--text">оператор_1;</p>' +
                                    '<p class="font300 black--text">оператор_2;</p>' +
                                    '<p class="font300 black--text">...</p>' +
                                    '<p class="font300 black--text">оператор_n;</p>' +
                                    '<p>end;</p></div>'
                                }
                            ]
                        ],
                    }
                }
            },
            {
                title: 'Цикл қалай жұмыс жасайды?',
                info: 'Циклдің программалау тілінде жазылған программадағы жұмысын көрсету',
                image: 'a2.jpg',
                interactive: {
                    name: 'lecture',
                    items: {
                        shape: {
                            title: 'Цикл программада|қалай жұмыс жасайды?',
                            subTitle: 'Алғышарты бар цикл',
                            bg: {
                                parallax: 'public/2/k1.jpg',
                                height: 800,
                            }
                        },
                        views: [
                            {
                                name: 'm-text',
                                big: true,
                                title: 'Тапсырмаларды шешу кезінде келесілерді есепке алған жөн:',
                                text: ['Алғышарты бар цикл ерекшелігі болып оның бір де бір рет орындалмауы ықтималдығы табылады - бұл аталған шарт бастапқыда жалған болған жағдайда орын алады. Бұл ретте егер цикл ешқашан False мәнін қабылдамаса, цикл "мәңгілік" болуы да мүмкін. Міне сондықтан цикл жұмысын аяқтау үшін әрқашан шарттың болуын қадағалаған жөн.']
                            },
                            [{
                                name: 'm-image',
                                backgroundColor: '#cbe7ff',
                                src: 'public/2/kt1.png',
                                cover: false,
                            }, {
                                name: 'm-text',
                                title: 'Пример',
                                text: ['Мысал ретінде келесі тапсырманы қарастырайық.',
                                    'Қазір Delphi немесе Lazarus ашып, жаңа жоба жасау қажет.',
                                    '1. Нысанға Button және Label компоненттерін орналастырыңыз.',
                                    '2. Батырмада OnClick процедурасын жасаңыз және Integer типті А айнымалыны енгізіңіз.',
                                    '3. Енді begin және end негізгі сөздері арасына А айнымалысының 1-ге тең мәнін орнатыңыз: A:=1;',
                                    '4. A<>100 шарты бар циклді жазыңыз, яғни A айнымалысы 100-ге тең болмайынша, цикл орындала береді. Егер А = 100 болса, цикл тоқтайды.']
                            }], {
                                name: 'm-text',
                                big: true,
                                title: 'Кодтың жалпы түрі:',
                                extra: '<div class="font700 headline blue--text">procedure <label class="font300 black--text">TForm1.Button1Click(Sender: TObject);</label><br/>' +
                                'var   <label class="font300 black--text">A</label>:integer;<br/>' +
                                'begin<br/>' +
                                '<label class="font300 black--text">A:=1;</label> <span class="green--text text--darken-2 font300">//бірлік тағайындаймыз</span><br/>' +
                                'While <label class="font300 black--text">A <> 100</label> do <span class="green--text text--darken-2 font300">// А 100-ге тең болғанша, жасай береміз</span><br/>' +
                                'begin<br/>' +
                                '<label class="font300 black--text">A:=A+1;</label> <span class="green--text text--darken-2 font300">//бірлік қосып отырамыз</span><br/>' +
                                '<label class="font300 black--text">Label1.Caption:=IntToStr(a);</label> <span class="green--text text--darken-2 font300">//А мәнін шығарамыз</span><br/>' +
                                'end;<br/>' +
                                'end;</div>'
                            }, {
                                name: 'm-text',
                                big: true,
                                text: ['Циклдің қалай жұмыс жасайтындығын қадамдап көру үшін:',
                                    '<b>Label1.Caption:=IntToStr(a);</b> жолдан кейін келесіні жазу қажет: ',
                                    '<b>Application.ProcessMessages;</b>',
                                    '<b>sleep(100);</b>',
                                    'Осы екі жол: ',
                                    '<b>Application.HandleMessage</b> - бұл цикл жұмысы кезінде айнымалы мәндерін шығаруға мүмкіндік беретін әдіс. Айнымалыны лабелге енгізетіндігімізге қарамастан, бұл әдіс қажет.',
                                    '<b>sleep(100)</b> - функциясы қандай да бір миллисекундта тұрып қалу үшін программаға нені жазу керектігін айтады. Миллисекунд жақша ішінде көрсетіледі. Бір секундта 1000 миллисекунд бар.']
                            }, {
                                name: 'm-text',
                                big: true,
                                title: 'Кодтың жалпы түрі:',
                                extra: '<div class="font700 headline blue--text">procedure <label class="font300 black--text">TForm1.Button1Click(Sender: TObject);</label><br/>' +
                                'var   <label class="font300 black--text">A</label>:integer;<br/>' +
                                'begin<br/>' +
                                '<label class="font300 black--text">A:=1;</label> <span class="green--text text--darken-2 font300">//бірлік тағайындаймыз</span><br/>' +
                                'While <label class="font300 black--text">A <> 100</label> do <span class="green--text text--darken-2 font300">//А 100-ге тең болмайынша, жасай береміз</span><br/>' +
                                'begin<br/>' +
                                '<label class="font300 black--text">A:=a+1;</label> <span class="green--text text--darken-2 font300">//бірлік қосып отырамыз</span><br/>' +
                                '<label class="font300 black--text">Label1.Caption:=IntToStr(a);</label> <span class="green--text text--darken-2 font300">//А мәнін шығарамыз</span><br/>' +
                                '<label class="font300 black--text">Application.ProcessMessages;</label><br/>' +
                                '<label class="font300 black--text">sleep(100);</label><br/>' +
                                'end;<br/>' +
                                'end;</div>'
                            }, {
                                name: 'm-video',
                                src: 'public/2/work_of_cycle.mp4',
                                full: true,
                                bg: 'public/2/v1.jpg',
                            },
                        ]
                    }
                }
            },
            {
                title: 'Өзіңді тексер',
                image: 'part3.png',
                info: 'Қолмен трассалауды орында және циклді орындау нәтижесін анықта',
                interactive:
                    {
                        name: 'cycle',
                        items: {
                            task: 'Келесі командаларды орындағаннан кейін S айнымалысының мәнін анықта:'
                        }
                    }
            }
        ]
    },
    en: {
        title: "Pretest loop",
        grade: "Grade 8",
        typeder: "On-line lecture",
        prologue: {
            author: 'Mark Zuckerberg',
            phrase: 'I think in the future not only programmers but everyone will be binded with elemens of programming',
        },
        parts: [
            {
                title: 'Learn',
                info: 'For learning of programming, it is necessary to know language syntax.',
                image: 'a1.jpg',
                interactive: {
                    name: 'lecture',
                    items: {
                        shape: {
                            title: 'Learn',
                            subTitle: 'Pretest loop',
                            bg: {
                                parallax: 'public/1/k1.jpg',
                                height: 800,
                            }
                        },
                        views: [
                            {
                                name: 'm-text',
                                title: 'Loop',
                                big: true,
                                text: ['Loop is routine of actions.']
                            },
                            {
                                name: 'm-video',
                                src: 'public/1/nature.mp4',
                                isImage: true,
                                bg: 'public/1/v1.png',
                                backgroundColor: '#cbe7ff',
                            }, {
                                name: 'm-video',
                                src: 'public/1/system.mp4',
                                isImage: true,
                                bg: 'public/1/v2.png',
                                backgroundColor: '#f38586',
                            }, {
                                name: 'm-text',
                                title: 'Цикл',
                                big: true,
                                text: ['Sequence of actions, which repeats in a loop, is a loop cycle. One pass through the loop is step, or iteration. Variables, which change inside of the loop and influence on its end is parameters of the loop.',
                                    'When spelling of looped algorithm you should remember it as follows.',
                                    'Firstly, for loop having of chance to finish one day, content of its loop cycle should influence on cycle condition.',
                                    'Secondly, condition should include valid expressions and values, determined before first implementation of loop cycle.']
                            },
                            [
                                {
                                    name: 'm-image',
                                    src: 'public/1/kt1_ru.png'
                                },
                                {
                                    name: 'm-text',
                                    title: 'While Do',
                                    big: true,
                                    text: ['One of loops using in programming is <b>While...Do</b> (do it while condition is correct).']
                                },
                            ],
                            [
                                {
                                    name: 'm-text',
                                    extra: '<div class="font700 display-2 light-blue--text text--darken-3"><p>while <span  class="font300 black--text mr-2 ml-2">condition</span> do</p>' +
                                    '<p>begin</p>' +
                                    '<p class="green--text text--darken-2 font300">//   the loop cycle</p>' +
                                    '<p>end;</p></div>'
                                },
                                {
                                    name: 'm-text',
                                    big: true,
                                    text: ['While statement works as follows. Value of the expression should be evaluated. If it is True, statement is performing. Otherwise, the loop should be finished, and control should be given to the statement, next to the loop cycle. The expression should be evaluated before each iteration. If at the first check the expression is False, the loop is not performing ever. ']
                                },
                            ],
                            [
                                {
                                    name: 'm-text',
                                    big: true,
                                    title: 'Compound statement',
                                    text: ['If it is need to perform multiple statements in the loop, it is necessary to use compound statement:  ']
                                },
                                {
                                    name: 'm-text',
                                    extra: '<div class="font700 display-1 blue--text"><p>while <span  class="font300 black--text mr-2 ml-2">condition</span> do</p>' +
                                    '<p>begin</p>' +
                                    '<p class="font300 black--text">оператор_1;</p>' +
                                    '<p class="font300 black--text">оператор_2;</p>' +
                                    '<p class="font300 black--text">...</p>' +
                                    '<p class="font300 black--text">оператор_n;</p>' +
                                    '<p>end;</p></div>'
                                }
                            ]
                        ],
                    }
                }
            },
            {
                title: 'How works the loop?',
                info: 'There is a loop work displaying in the program, spelled in program language.  ',
                image: 'a2.jpg',
                interactive: {
                    name: 'lecture',
                    items: {
                        shape: {
                            title: 'How works | the loop in the program?',
                            subTitle: 'Pretest loop',
                            bg: {
                                parallax: 'public/2/k1.jpg',
                                height: 800,
                            }
                        },
                        views: [
                            {
                                name: 'm-text',
                                big: true,
                                title: 'When problem solving you should take into account it as follows:',
                                text: ['Concern of the pretest loop is that it can perform never – this happens if mentioned value is initially false. At that, the loop can be “everlasting” - if condition never receives False value.',
                                    'That’s why conditions for loop work end should be watched always.']
                            },
                            [{
                                name: 'm-image',
                                backgroundColor: '#cbe7ff',
                                src: 'public/2/kt1.png',
                                cover: false,
                            }, {
                                name: 'm-text',
                                title: 'Пример',
                                text: ['Let’s consider problem as an example as follows. ',
                                    'Now we need to open Delphi or Lazarus and to create new project.',
                                    '1. Locate Button and Label components on form:',
                                    '2. Create OnClick procedure on button and enter A variable of Integer type;',
                                    '3. Now fix value of A variable is equal to 1 between key words begin and end: A:=1;',
                                    '4. Spell the loop with condition A<>100, it means that while A is not equal to 100 the loop will be performing. If A=100 – the loops will stop.']
                            }], {
                                name: 'm-text',
                                big: true,
                                title: 'General view of the code:',
                                extra: '<div class="font700 headline blue--text">procedure <label class="font300 black--text">TForm1.Button1Click(Sender: TObject);</label><br/>' +
                                'var   <label class="font300 black--text">A</label>:integer;<br/>' +
                                'begin<br/>' +
                                '<label class="font300 black--text">A:=1;</label> <span class="green--text text--darken-2 font300">//assign unit </span><br/>' +
                                'While <label class="font300 black--text">A <> 100</label> do <span class="green--text text--darken-2 font300">//while A is not equal to 100 – we make </span><br/>' +
                                'begin<br/>' +
                                '<label class="font300 black--text">A:=A+1;</label> <span class="green--text text--darken-2 font300">// we add unit </span><br/>' +
                                '<label class="font300 black--text">Label1.Caption:=IntToStr(a);</label> <span class="green--text text--darken-2 font300">//Display A value</span><br/>' +
                                'end;<br/>' +
                                'end;</div>'
                            }, {
                                name: 'm-text',
                                big: true,
                                text: ['For seeing how the loop works step-by-step. ',
                                    'Finish spelling after row: <b>Label1.Caption:=IntToStr(a);</b>',
                                    '<b>Application.ProcessMessages;</b>',
                                    '<b>sleep(100);</b>',
                                    'These are two rows:',
                                    '<b>Application.HandleMessage</b> - is a method, allowing to display a value of variables during the loop work. Even though we display variable at label, this method is necessary.',
                                    '<b>sleep(100)</b> - this function states to the program that it is need to sleep like freezing on some quantity of millisecond. Millisecond is mentioned in brackets. Second has 1000 millisecond.']
                            }, {
                                name: 'm-text',
                                big: true,
                                title: 'General view of the code:',
                                extra: '<div class="font700 headline blue--text">procedure <label class="font300 black--text">TForm1.Button1Click(Sender: TObject);</label><br/>' +
                                'var   <label class="font300 black--text">A</label>:integer;<br/>' +
                                'begin<br/>' +
                                '<label class="font300 black--text">A:=1;</label> <span class="green--text text--darken-2 font300">//assign unit </span><br/>' +
                                'While <label class="font300 black--text">A <> 100</label> do <span class="green--text text--darken-2 font300">//while A is not equal to 100 – we make</span><br/>' +
                                'begin<br/>' +
                                '<label class="font300 black--text">A:=a+1;</label> <span class="green--text text--darken-2 font300">//we add unit</span><br/>' +
                                '<label class="font300 black--text">Label1.Caption:=IntToStr(a);</label> <span class="green--text text--darken-2 font300">//Display A value</span><br/>' +
                                '<label class="font300 black--text">Application.ProcessMessages;</label><br/>' +
                                '<label class="font300 black--text">sleep(100);</label><br/>' +
                                'end;<br/>' +
                                'end;</div>'
                            }, {
                                name: 'm-video',
                                src: 'public/2/work_of_cycle.mp4',
                                full: true,
                                bg: 'public/2/v1.jpg',
                            },
                        ]
                    }
                }
            },
            {
                title: 'Check yourself',
                image: 'part3.png',
                info: 'Perform manual tracing and determine output of the loop',
                interactive:
                    {
                        name: 'cycle',
                        items: {
                            task: 'Determine value of S variable after implementation of following commands:'
                        }
                    }
            }
        ]
    }
}