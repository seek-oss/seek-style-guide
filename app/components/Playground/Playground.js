import styles from './Playground.less';

import React, { Component } from 'react';

import {
  TextField,
  Button,
  StarIcon,
  MailIcon,
  PageBlock,
  Section,
  AsidedLayout,
  Columns,
  Card,
  Text,
  Positive,
  Critical,
  Secondary,
  Strong,
  Header,
  Footer
} from 'seek-style-guide/react';

import TextLink from './Atoms/TextLink/TextLink';
import IconButton from './Atoms/IconButton/IconButton';
import Tab from './Atoms/Tab/Tab';

const renderAsideProfile = () => (
  <Card transparent>
    <Section>
      <Text heading>Profile visibility</Text>
      <Text secondary>Employers cant view your profile or resumes or contact you with job opportunities.</Text>
    </Section>
  </Card>
);

const renderAsideProfilePhoto = () => (
  <div>
    <Text hero>Tom Cliff</Text>

    <Text subheading>
      <div>0412 345 678</div>
      <div>Add a home location</div>
      <div>t.cliff@email.com</div>
    </Text>
  </div>
);

const renderAsideSignIn = () => (
  <Card transparent>
    <Section className={styles.marketing}>
      <Text heading>Make the most of SEEK</Text>
      <Text>Only employers registered with SEEK can see your profile</Text>
      <Text>Save time everytime with pre-filled application forms</Text>
      <Text>Be the first to receive latest jobs and industry insights</Text>
    </Section>
  </Card>
);

const renderAsideRegister = renderAsideSignIn;

const renderAsideRecommendedJobs = () => (
  <Card>
    <Section>
      <Text heading>How it works</Text>
      <Text>Every day we look for new opportunities for you based on your profile, search, save and apply activity.</Text>
      <Text><TextLink href="https://www.seek.com.au">Review your profile</TextLink></Text>
      <Text><TextLink href="https://www.seek.com.au">Start a new search</TextLink></Text>
    </Section>
  </Card>
);

const renderAsideMyActivity = () => (
  <div className={styles.activityPanel}>
    <Text>Applied on SEEK 20 Dec 2016</Text>
    <div className={styles.activityMobileCustom}>
      <div className={styles.touchable}>
        No Cover Letter
      </div>
      <TextLink href="https://www.seek.com.au">Download Resume</TextLink>
    </div>
  </div>
);

const renderAsideMyActivityActions = () => (
  <div>
    <IconButton icon="delete">Remove Job</IconButton>
  </div>
);

const renderJobDetailDate = () => (
  <Text headline secondary>18 Jan 2017</Text>
);

const renderJobDetailMetadata = () => (
  <div>
    <Card>
      <Section group>
        <Section>
          <Button color="pink" className={styles.fullWidthTextField}>Apply for this job</Button>
        </Section>
        <Section>
          <Text secondary>{'Applications for this role will take you to the advertiser\'s site.'}</Text>
        </Section>
        <Section>
          <Columns tight>
            <Button color="gray" className={styles.fullWidthTextField}><StarIcon /> Save Job</Button>
            <Button color="gray" className={styles.fullWidthTextField}><MailIcon /> Send Job</Button>
          </Columns>
        </Section>
      </Section>
    </Card>
    <Card>
      <Section>
        <Text strong raw>Melbourne,</Text>
        <Text>CBD & Inner Suburbs</Text>
        <Text strong>Base + Super</Text>
        <Text strong>Full time</Text>
        <Text strong raw>Information & Communication Technology</Text>
        <Text>Architects</Text>
      </Section>
    </Card>
  </div>
);

const jobDetailsContent = '<HTML><p><strong>About SEEK</strong></p> <p>We are&nbsp;the global leader in the creation and operation of online employment markets. In the ASX Top 50, SEEK has enjoyed being one of Australia\'s fastest growing businesses with a consistent and formidable position of market leadership across Australia and New Zealand and ownership stakes in leading companies across China, Brazil, Mexico, Africa and SE Asia.&nbsp;</p> <p><strong>Multiple Opportunities&nbsp;</strong></p> <p>We&nbsp;have three Software Architect opportunities currently&nbsp;available&nbsp;at SEEK. All three roles are similar from a role and day to day&nbsp;perspective, however they have&nbsp;different development and technology strategy focus&nbsp;areas, being:&nbsp;Core Business, Mobile and Cloud.</p> <p><strong>About the Opportunities&nbsp;</strong></p> <p>The Software Architect is a technology leadership position at SEEK: you\'ll drive large transformational change across IT on behalf of the business. These opportunities will enable you to:&nbsp;</p> <ul><li>Work in a passionate,&nbsp;fast growing environment where the ability to learn and adapt quickly to new methodologies and technologies is valued.</li><li>Collaborate with&nbsp;cross-functional, multi-disciplinary teams to deliver excellent software for our customers in an agile environment.</li><li>Be part of a fun, successful global online business with a diverse team of development, operations and security minded folks.</li><li>Act as an enabler for the team, removing obstacles and identifying process and technological improvements.</li><li>Strive for technical excellence and help facilitate the healthy tension between the delivery and the long term viability of the code base</li><li>Actively participate and contribute to communities of practice at SEEK and beyond.</li></ul> <p><strong>Your Work</strong></p> <p>Your work will be a compelling mix of working embedded within delivery teams and of broader architectural responsibilities, which will include:</p> <ul><li>Getting your hands dirty delivering working software</li><li>Paving the way for development streams to adopt new technology, software patterns and approaches</li><li>Providing guidance to delivery</li><li>Developing solutions, tools and processes and technological roadmaps</li><li>Leading external vendor and emergent technology evaluation</li><li>Running and supporting the technical communities of practice</li></ul> <p><strong>To Succeed&nbsp;</strong></p> <p>To be successful as a Software Architect at SEEK&nbsp;you will ideally have experiences in:</p> <ul><li>The design, build, operations and evolution of high traffic applications, networks and business critical systems on AWS or native mobile applications&nbsp;OR the modernisation of software systems while delivering on aggressive revenue focussed roadmaps&nbsp;</li><li>Ability to effectively communicate trade-offs and impacts to stakeholders&nbsp;</li><li>In-depth technical knowledge of enterprise, solution and application architectures.</li><li>Practice Evolutionary Design, posses a deep understanding of Solution Design, and be proficient in Domain Driven Design, Design Patterns and Data Modelling, OO principles etc.</li><li>Highly competent in multiple languages across multiple layers of the technology stack.</li><li>Ability to mentor and coach developers and testers to author testable, effective and clean code</li><li>Demonstrated ability to lead and coach others in agile methodologies and development practices such as: CI TDD, BDD, Kanban and Lean.</li></ul> <p><strong>Culture and Benefits</strong></p> <p>SEEK\'s commitment to fostering a productive work environment has helped us drive growth and maintain a consistently high ranking in the annual Hewitt Best Employer Award. The work environment is Agile and fast-paced, with a strong emphasis on outcomes. People like to come here – and we\'re proud of that! And we don\'t have a dress code.</p> <p><strong>How to Apply</strong></p> <p>Click the &quot;Apply for this job&quot; link&nbsp;to begin your application. If you want to know more about the role please do not hesitate to contact<strong> Melanie Whitehouse</strong>, Talent Acquisition Consultant on <strong>(03) 8517 4571</strong>,<strong>&nbsp;</strong>for a confidential conversation.</p> <p><strong>Privacy Policy</strong></p> <p>All personal information received by us from you or about you will be stored, used and disclosed by us in accordance with our privacy policy, a copy of which can be found at www.seek.com.au/privacy. &nbsp;If you&nbsp;have any questions in relation to how we may use and store your personal information please contact us at usersupport@seek.com.au.</p></HTML> <HTML>Multiple opportunities available specialising in cloud, mobile and core business Pursue mastery of software delivery and inspire software craftsmanship in others Join a bunch of like minded, smart people doing great things</HTML>';

export default class Playground extends Component {
  render() {
    return (
      <div>
        <Header />

        <PageBlock className={styles.header}>
          <AsidedLayout size="340px">
            <Section>
              <AsidedLayout renderAside={renderAsideProfilePhoto} size="400px">
                <Text hero className={styles.photo}>TC</Text>
              </AsidedLayout>
            </Section>
          </AsidedLayout>
        </PageBlock>

        <PageBlock>
          <AsidedLayout reverse renderAside={renderAsideProfile} size="340px">
            <Card>
              <Section>
                <Text heading>Personal summary</Text>
                <Text>Add a personal summary to your profile as a way to introduce who you are.</Text>
                <IconButton icon="plus">Add summary</IconButton>
              </Section>
            </Card>

            <Card>
              <Section>
                <Text heading>Career history</Text>
                <Text>The more you let employers know about your experince the more you can stand out from other candidates.</Text>
                <IconButton icon="plus">Add Role</IconButton>
              </Section>
            </Card>

            <Card>
              <Section>
                <Text heading>Resumé</Text>
                <Text subheading>Default Resumé</Text>
                <Text secondary><TextLink href="https://www.seek.com.au">20140714_-_cc11017_development...orm.pdf</TextLink> (75.82KB Added - 16 Dec 2016)</Text>
                <Text>Your “Default” resumé is not visible to employers.</Text>
                <Text>Update your privacy setting to “Standard” so that employers can view your resumé and get in contact with job opportunities. <TextLink href="https://www.seek.com.au">Learn more</TextLink> about your privacy.</Text>
                <Text subheading>Other Resumés</Text>
                <Text secondary><TextLink href="https://www.seek.com.au">Ohter_Resume.pdf</TextLink> (75.82KB Added - 16 Dec 2016)</Text>
                <IconButton icon="plus">Add summary</IconButton>
              </Section>
            </Card>

            <Card>
              <Section>
                <Text heading>About the role you are looking for</Text>
                <Text secondary>Classification/s of interest:</Text>
                <Text secondary>Role type</Text>
              </Section>
            </Card>
          </AsidedLayout>
        </PageBlock>

        <PageBlock>
          <Section header>
            <Text hero>Candidate Sign in</Text>
          </Section>

          <AsidedLayout reverse renderAside={renderAsideSignIn} size="360px">
            <Card>
              <Section slim className={styles.cardHeader}>
                <TextLink href="https://www.seek.com.au" chevron="right">Are you an Employer?</TextLink>
              </Section>

              <Section>
                <TextField id="email" label="Email address" inputProps={{ type: 'email' }} className={styles.fullWidthTextField} />
                <TextField id="password" label="Password" inputProps={{ type: 'password' }} className={styles.fullWidthTextField} />
                <div>
                  <TextLink href="https://www.seek.com.au">Forgot your password?</TextLink>
                </div>
                <Button color="pink">Sign In</Button>
                <Text>Don’t have an account? <TextLink href="https://www.seek.com.au">Register</TextLink></Text>
              </Section>
            </Card>
          </AsidedLayout>
        </PageBlock>

        <PageBlock>
          <Section header>
            <Text hero>Register</Text>
          </Section>

          <AsidedLayout reverse renderAside={renderAsideRegister} size="360px">
            <Card>
              <Section slim className={styles.cardHeader}>
                <TextLink href="https://www.seek.com.au" chevron="right">Are you an Employer?</TextLink>
              </Section>
              <Section>
                <Columns>
                  <TextField id="fname" label="First name" inputProps={{ type: 'text' }} className={styles.fullWidthTextField} />
                  <TextField id="lname" label="Last name" inputProps={{ type: 'text' }} className={styles.fullWidthTextField} />
                </Columns>
                <TextField id="email" label="Email address" inputProps={{ type: 'email' }} className={styles.fullWidthTextField} />
                <TextField id="password" label="Password" inputProps={{ type: 'password' }} className={styles.fullWidthTextField} />
                <Text secondary>By registering you agree to the <TextLink href="https://www.seek.com.au">SEEK privacy policy</TextLink></Text>
                <Button color="pink">Register</Button>
                <Text>Already have an account? <TextLink href="https://www.seek.com.au">Sign in</TextLink></Text>
              </Section>
            </Card>
          </AsidedLayout>
        </PageBlock>

        <PageBlock>
          <Section header>
            <Text hero>Recommended jobs</Text>
            <Text>24 jobs showing</Text>
            <Tab>All</Tab>
            <Tab selected>New</Tab>
          </Section>

          <AsidedLayout reverse renderAside={renderAsideRecommendedJobs} size="240px">
            <Card group>
              {
                [0, 1, 2, 3].map(n => (
                  <Card key={n}>
                    <Section>
                      <TextLink subheading href="https://www.seek.com.au">Building Supervisor</TextLink>
                      <Text>A1 Building Group</Text>
                      <Text>CBD & Inner Suburbs, Melbourne</Text>
                    </Section>
                  </Card>
                ))
              }
            </Card>
          </AsidedLayout>
        </PageBlock>

        <PageBlock>
          <Section header>
            <Text hero>Activity</Text>
            <Tab selected>Saved</Tab>
            <Tab>Applied</Tab>
          </Section>

          <Card group>
            {
              [0, 1, 2, 3].map(n => (
                <Card key={n}>
                  <Section>
                    <AsidedLayout renderAside={renderAsideMyActivity} size="270px">
                      <TextLink subheading href="https://www.seek.com.au">Local Health District Registered Nurse</TextLink>
                      <Text>Western NSW Local Health District</Text>
                      <Text raw>Job posted 30d+ ago</Text>
                      <Text raw secondary>Dubbo & Central NSW</Text>
                      <Text secondary>Salary Rate: $29.32 to $41.18 ph</Text>
                      <Text>
                        Are you a Registered Nurse and looking for variety and challenges on a daily basis? Yes? Here is your chance - Full Time or Part-time available.
                      </Text>
                    </AsidedLayout>
                    <AsidedLayout renderAside={renderAsideMyActivityActions} size="270px">
                      <IconButton icon="plus">Add Notes</IconButton>
                    </AsidedLayout>
                  </Section>
                </Card>
              ))
            }
          </Card>
        </PageBlock>

        <PageBlock>
          <Section>
            <TextLink>Back to search results</TextLink>
            <AsidedLayout renderAside={renderJobDetailDate}>
              <Text headline>Software Architect</Text>
            </AsidedLayout>
            <TextLink>More jobs from SEEK Limited</TextLink>
          </Section>

          <AsidedLayout reverse renderAside={renderJobDetailMetadata} size="360px">
            <Card group>
              <Card>
                <Section>
                  <Text>
                    <div
                      dangerouslySetInnerHTML={{ __html: jobDetailsContent }} // eslint-disable-line react/no-danger
                    />
                  </Text>
                </Section>
              </Card>
              <Card>
                <Section>
                  <Text>You must have the <Strong>right to live and work</Strong> in this location to apply for this job.</Text>
                </Section>
              </Card>
            </Card>
          </AsidedLayout>
        </PageBlock>

        <PageBlock>
          <Section header>
            <Text hero>This job is no longer advertised</Text>
          </Section>
          <Card>
            <Section group>
              <Section>
                <Text>Expired jobs remain on SEEK for 90 days after last advertised, or until they are removed by the advertiser.</Text>
              </Section>
              <Section>
                <Button color="pink">Search for another job</Button>
              </Section>
            </Section>
          </Card>
        </PageBlock>

        <PageBlock>
          <Section header>
            <Text hero>Two columns</Text>
          </Section>
          <Columns>
            <Card>
              <Section>
                <Text heading>The quick brown fox</Text>
                <Text subheading>The quick brown fox jumps over the lazy dog</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel sapien lorem. Duis viverra semper lacus. Vestibulum ipsum ipsum, imperdiet a nulla eget, consequat mattis urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ultricies placerat mattis. Vestibulum ac laoreet mauris. Cras ut turpis ultrices mi placerat cursus. Sed bibendum odio eget convallis blandit. Nullam placerat elit ut porttitor dignissim. Curabitur a risus enim. Nullam sit amet nulla finibus, rutrum diam a, viverra nisi. Ut turpis sapien, convallis ut lacus sed, luctus lobortis neque. Nulla facilisi. Cras vitae orci est. Etiam nec dictum orci. Morbi nisl nulla, dictum vitae nunc quis, varius hendrerit erat.</Text>
                <Text>Integer at ipsum a velit elementum luctus. Sed quis odio vitae lorem gravida ornare. Integer pharetra facilisis faucibus. Nullam dignissim, justo hendrerit lacinia pulvinar, nulla sapien condimentum lacus, a tincidunt est nibh non neque. Fusce quis leo accumsan, tempus nisl nec, gravida leo. Ut non augue eget enim tempor fringilla. Nulla pellentesque condimentum risus at consequat. Sed nibh nunc, consectetur sed massa eleifend, dapibus sollicitudin nisl. Nullam leo lorem, mollis vel dolor quis, tristique laoreet ligula. Nam id mi in ante consectetur sagittis vitae ac magna. Fusce iaculis, nibh ac pellentesque luctus, eros lacus ultrices ligula, eget tincidunt metus est at nisl. Nam consectetur eros odio, nec molestie nibh rhoncus at. Aenean augue tortor, sodales non faucibus eget, hendrerit vitae quam. Integer tincidunt laoreet euismod.</Text>
              </Section>
            </Card>
            <Card>
              <Section>
                <Text heading>The quick brown fox</Text>
                <Text subheading>The quick brown fox jumps over the lazy dog</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel sapien lorem. Duis viverra semper lacus. Vestibulum ipsum ipsum, imperdiet a nulla eget, consequat mattis urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ultricies placerat mattis. Vestibulum ac laoreet mauris. Cras ut turpis ultrices mi placerat cursus. Sed bibendum odio eget convallis blandit. Nullam placerat elit ut porttitor dignissim. Curabitur a risus enim. Nullam sit amet nulla finibus, rutrum diam a, viverra nisi. Ut turpis sapien, convallis ut lacus sed, luctus lobortis neque. Nulla facilisi. Cras vitae orci est. Etiam nec dictum orci. Morbi nisl nulla, dictum vitae nunc quis, varius hendrerit erat.</Text>
                <Text>Integer at ipsum a velit elementum luctus. Sed quis odio vitae lorem gravida ornare. Integer pharetra facilisis faucibus. Nullam dignissim, justo hendrerit lacinia pulvinar, nulla sapien condimentum lacus, a tincidunt est nibh non neque. Fusce quis leo accumsan, tempus nisl nec, gravida leo. Ut non augue eget enim tempor fringilla. Nulla pellentesque condimentum risus at consequat. Sed nibh nunc, consectetur sed massa eleifend, dapibus sollicitudin nisl. Nullam leo lorem, mollis vel dolor quis, tristique laoreet ligula. Nam id mi in ante consectetur sagittis vitae ac magna. Fusce iaculis, nibh ac pellentesque luctus, eros lacus ultrices ligula, eget tincidunt metus est at nisl. Nam consectetur eros odio, nec molestie nibh rhoncus at. Aenean augue tortor, sodales non faucibus eget, hendrerit vitae quam. Integer tincidunt laoreet euismod.</Text>
              </Section>
            </Card>
          </Columns>
        </PageBlock>

        <PageBlock>
          <Section header>
            <Text hero>Three columns</Text>
          </Section>
          <Columns>
            <Card>
              <Section>
                <Text heading>The quick brown fox</Text>
                <Text subheading>The quick brown fox jumps over the lazy dog</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel sapien lorem. Duis viverra semper lacus. Vestibulum ipsum ipsum, imperdiet a nulla eget, consequat mattis urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ultricies placerat mattis. Vestibulum ac laoreet mauris. Cras ut turpis ultrices mi placerat cursus. Sed bibendum odio eget convallis blandit. Nullam placerat elit ut porttitor dignissim. Curabitur a risus enim. Nullam sit amet nulla finibus, rutrum diam a, viverra nisi. Ut turpis sapien, convallis ut lacus sed, luctus lobortis neque. Nulla facilisi. Cras vitae orci est. Etiam nec dictum orci. Morbi nisl nulla, dictum vitae nunc quis, varius hendrerit erat.</Text>
                <Text>Integer at ipsum a velit elementum luctus. Sed quis odio vitae lorem gravida ornare. Integer pharetra facilisis faucibus. Nullam dignissim, justo hendrerit lacinia pulvinar, nulla sapien condimentum lacus, a tincidunt est nibh non neque. Fusce quis leo accumsan, tempus nisl nec, gravida leo. Ut non augue eget enim tempor fringilla. Nulla pellentesque condimentum risus at consequat. Sed nibh nunc, consectetur sed massa eleifend, dapibus sollicitudin nisl. Nullam leo lorem, mollis vel dolor quis, tristique laoreet ligula. Nam id mi in ante consectetur sagittis vitae ac magna. Fusce iaculis, nibh ac pellentesque luctus, eros lacus ultrices ligula, eget tincidunt metus est at nisl. Nam consectetur eros odio, nec molestie nibh rhoncus at. Aenean augue tortor, sodales non faucibus eget, hendrerit vitae quam. Integer tincidunt laoreet euismod.</Text>
              </Section>
            </Card>
            <Card>
              <Section>
                <Text heading>The quick brown fox</Text>
                <Text subheading>The quick brown fox jumps over the lazy dog</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel sapien lorem. Duis viverra semper lacus. Vestibulum ipsum ipsum, imperdiet a nulla eget, consequat mattis urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ultricies placerat mattis. Vestibulum ac laoreet mauris. Cras ut turpis ultrices mi placerat cursus. Sed bibendum odio eget convallis blandit. Nullam placerat elit ut porttitor dignissim. Curabitur a risus enim. Nullam sit amet nulla finibus, rutrum diam a, viverra nisi. Ut turpis sapien, convallis ut lacus sed, luctus lobortis neque. Nulla facilisi. Cras vitae orci est. Etiam nec dictum orci. Morbi nisl nulla, dictum vitae nunc quis, varius hendrerit erat.</Text>
                <Text>Integer at ipsum a velit elementum luctus. Sed quis odio vitae lorem gravida ornare. Integer pharetra facilisis faucibus. Nullam dignissim, justo hendrerit lacinia pulvinar, nulla sapien condimentum lacus, a tincidunt est nibh non neque. Fusce quis leo accumsan, tempus nisl nec, gravida leo. Ut non augue eget enim tempor fringilla. Nulla pellentesque condimentum risus at consequat. Sed nibh nunc, consectetur sed massa eleifend, dapibus sollicitudin nisl. Nullam leo lorem, mollis vel dolor quis, tristique laoreet ligula. Nam id mi in ante consectetur sagittis vitae ac magna. Fusce iaculis, nibh ac pellentesque luctus, eros lacus ultrices ligula, eget tincidunt metus est at nisl. Nam consectetur eros odio, nec molestie nibh rhoncus at. Aenean augue tortor, sodales non faucibus eget, hendrerit vitae quam. Integer tincidunt laoreet euismod.</Text>
              </Section>
            </Card>
            <Card>
              <Section>
                <Text heading>The quick brown fox</Text>
                <Text subheading>The quick brown fox jumps over the lazy dog</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel sapien lorem. Duis viverra semper lacus. Vestibulum ipsum ipsum, imperdiet a nulla eget, consequat mattis urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ultricies placerat mattis. Vestibulum ac laoreet mauris. Cras ut turpis ultrices mi placerat cursus. Sed bibendum odio eget convallis blandit. Nullam placerat elit ut porttitor dignissim. Curabitur a risus enim. Nullam sit amet nulla finibus, rutrum diam a, viverra nisi. Ut turpis sapien, convallis ut lacus sed, luctus lobortis neque. Nulla facilisi. Cras vitae orci est. Etiam nec dictum orci. Morbi nisl nulla, dictum vitae nunc quis, varius hendrerit erat.</Text>
                <Text>Integer at ipsum a velit elementum luctus. Sed quis odio vitae lorem gravida ornare. Integer pharetra facilisis faucibus. Nullam dignissim, justo hendrerit lacinia pulvinar, nulla sapien condimentum lacus, a tincidunt est nibh non neque. Fusce quis leo accumsan, tempus nisl nec, gravida leo. Ut non augue eget enim tempor fringilla. Nulla pellentesque condimentum risus at consequat. Sed nibh nunc, consectetur sed massa eleifend, dapibus sollicitudin nisl. Nullam leo lorem, mollis vel dolor quis, tristique laoreet ligula. Nam id mi in ante consectetur sagittis vitae ac magna. Fusce iaculis, nibh ac pellentesque luctus, eros lacus ultrices ligula, eget tincidunt metus est at nisl. Nam consectetur eros odio, nec molestie nibh rhoncus at. Aenean augue tortor, sodales non faucibus eget, hendrerit vitae quam. Integer tincidunt laoreet euismod.</Text>
              </Section>
            </Card>
          </Columns>
        </PageBlock>

        <PageBlock>
          <Section header>
            <Text hero>Text variants</Text>
          </Section>
          <Card group>
            <Card>
              <Section>
                <Text heading>Text component modifiers</Text>
                <Text positive>Positive text</Text>
                <Text critical>Critical text</Text>
                <Text secondary>Secondary text</Text>
                <Text strong>Strong text</Text>
              </Section>
            </Card>
            <Card>
              <Section>
                <Text heading>Inline variant components</Text>
                <Text><Positive>Positive text</Positive></Text>
                <Text><Critical>Critical text</Critical></Text>
                <Text><Secondary>Secondary text</Secondary></Text>
                <Text><Strong>Strong text</Strong></Text>
              </Section>
            </Card>
          </Card>
        </PageBlock>

        <Footer />
      </div>
    );
  }
}
