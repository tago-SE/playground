import React from 'react';

import { IFMain } from '../components/If-Design-System/Main';
import { Heading } from '../components/If-Design-System/Heading'
import { Row, Column } from '../components/If-Design-System/Grid';

const HomePage = () => (
    <IFMain>

        <div className="if block">
            <div className="if container">
                <Heading size="largest" rank={1} trailingClassName="center">
                    Body text modules
                </Heading>

                <Row>
                    <Column trailingClassName="-6--xs col-6--md">
                        <p className="if text body">
                            Nu är semestertiden över för de flesta av oss och förhoppningsvis har ni haft en härlig sommar. Utöver
                            strand, hängmatta och grill så innebär ledigheten en möjlighet att reflektera och stanna upp. För mig
                            innebär höstterminen en möjlighet att sätta upp nya mål. Det är ett utmärkt tillfälle att ta tag i de där
                            sakerna som inte riktigt prioriterats de senaste månaderna. Jag ser över sparandet, försäkringar och diverse
                            andra viktiga saker som inte känns lika intressant under de varmaste sommarmånaderna.
                        </p>
                        <p className="if text body">
                            Min sommar bestod inte bara av varma sommardagar utan även tillskott i familjen. För att ge vår dotter ett
                            tillskott i framtiden har vi diskuterat hur vi vill spara till henne redan nu. Det kan upplevas som
                            krångligt och långt bort men ofta ett välkommet tillskott för barnet i framtiden. Det finns många
                            anledningar att spara till sina barn, barnbarn eller kanske barn till dina nära och kära. Du kanske vill
                            hjälpa till med pengar till ett körkort, till utlandsstudier eller till ett lägenhetsköp – men inte vet hur
                            du ska göra?
                        </p>
                    </Column>

                    <Column trailingClassName="-6--xs col-6--md">
                        <p className="if text body">
                            Jag har valt att öppna en Kapitalförsäkring Barn med min dotter som förmånstagare. Anledningen till detta är
                            att jag på ett enklare sätt kan administrera kontot och bestämmer när pengarna ska betalas ut. Om pengarna
                            ska betalas ut vid barnets 18-årsdag, senare eller löpande är ett beslut jag och min sambo inte behöver ta
                            nu. Om jag dör är jag trygg med att pengarna tillfaller förmånstagaren (min dotter).
                        </p>
                        <p className="if text body">
                            Utöver kapitalförsäkring kan du välja att öppna ett konto direkt i barnets namn. Kontot står i barnets namn
                            men administreras av föräldrarna. Vid barnets 18-årsdag övergår kontot helt till barnet.
                        </p> 
                    </Column>
                    

                </Row>
            </div>
        </div>
  </IFMain>
);

export default HomePage;