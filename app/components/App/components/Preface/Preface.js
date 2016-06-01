import styles from './Preface.less';

import React from 'react';

import GridContainer from 'GridContainer/GridContainer';
import Columns from 'Columns/Columns';

export default function Preface() {
  return (
    <GridContainer>
      <section className={styles.root}>
        <h1 className={styles.hero}>A principled design process</h1>
          <div className={styles.section}>
            <p className={styles.intro}>SEEK have developed 10 principles that describe the fundamental goals the design team consider when applying their minds to new design challenges or refining existing work. Their purpose is to enable the creation of content that will assist our users to complete tasks easily and hopefully enjoy the experience.</p>
          </div>

        <Columns>
          {() => [
            <div>
              <div className={styles.section}>
                <h2 className={styles.bold}>Design with empathy</h2>
                <p className={styles.p}>Understand our customers and end users better than they understand themselves</p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.bold}>A Seek interaction is transparent, honest and trustworthy</h2>
                <p className={styles.p}>A user experience at Seek should be true to the brand & true to how people want to be treated. &ldquo;If we want users to like our software, we should design it to behave like a likeable person.&rdquo; &ndash; Alan Cooper</p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.bold}>Use persuasive design to achieve business goals</h2>
                <p className={styles.p}>It is not enough that our design is usable,
        it should be used in a way that encourages users towards the goals of SEEK. A registered user action is more valuable than an anonymous one, a searchable profile is more useful than a hidden one.</p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.bold}>Content is king</h2>
                <p className={styles.p}>A person&rsquo;s focus should be on their content, not on the UI. Help people work without interference.</p>
              </div>
            </div>,

            <div>
              <div className={styles.section}>
                <h2 className={styles.bold}>Simplicity is powerful</h2>
                <p className={styles.p}>A minimalist form and function keeps users focused on their goals without distraction. It improves on-screen responsiveness as well as being suited to small-screen implementations.</p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.bold}>Data informs design</h2>
                <p className={styles.p}>&ldquo;One accurate measurement is worth more than a thousand expert opinions.&rdquo; &ndash; Grace Hopper</p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.bold}>Consistency matters</h2>
                <p className={styles.p}>Appearance follows behaviour (Form follows function). Designed elements should look like they behave&mdash;someone should be able to predict how an interface element will behave merely by looking at it. Embrace consistency, but not homogeneity. If something looks the same it should always act the same</p>
              </div>
              <div className={styles.section}>
                <h2 className={styles.bold}>Accessibile design is good design</h2>
                <p className={styles.p}>In principle Seek design should be usable on all devices by all of the people in all situations. Design is simple, touch friendly and clear and aims for AA accessibility</p>
              </div>
            </div>,

            <div>
              <div className={styles.section}>
                <h2 className={styles.bold}>Make it mine</h2>
                <p className={styles.p}>The jobseeking experience is highly personal one that takes place over extended periods of time. The experience should align to the way that users conduct their jobseeking, allowing them to continue where they left off.</p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.bold}>Don&rsquo;t make users think</h2>
                <p className={styles.p}>Observation shows that users do not read instructions. Interactions should be task focused, eliminating decision points and generally use one clear call to action.</p>
              </div>
            </div>
          ]}
        </Columns>
      </section>
    </GridContainer>
  );
}
