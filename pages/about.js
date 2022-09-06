import Hero from 'components/hero'
import Meta from 'components/meta'
import Hero2 from "/components/hero2"
import Container from 'components/container'
import Postbody from 'components/post-body'
import Contact from 'components/contact'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import Image from 'next/image'
import eyecatch from 'images/about.jpeg'
import SectionTitle from 'components/section-title'
import Profile from 'components/Profile'
import Skills from 'components/skils'
import Experience from 'components/experience'
import MainContainer from 'components/main-container'
import ContainerArticle from 'components/container-article'

export default function About() {
  return (
        <ContainerArticle>
          <Meta 
            pageTitle="アバウト" 
            pageDesc="About development activities"
            pageImg={eyecatch.src}
            pageImgW={eyecatch.width}
            pageImgH={eyecatch.height}/>
          {/* <figure>
              <Image
                src={eyecatch}
                alt=""
                layout="responsive"
                sizes="(min-width: 1152px) 1152px, 100vw"
                priority
                placeholder="blur"
              />
          </figure> */}

          {/* <Hero title="About" subtitle="About development activities" /> */}
          
          <Hero2
              title="Cube"
              subtitle="アウトプットしていくサイト" 
              imageOn
          />

          {/* <figure>
            <Image
              src={eyecatch}
              alt=""
              layout="responsive"
              sizes="(min-width: 1152px) 1152px, 100vw"
              priority
              placeholder="blur"
            />
          </figure> */}


          {/* <TwoColumn>
            <TwoColumnMain>
              <Postbody>
                <p>Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインなど、さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。</p>
                <h2>ものづくりで目指していること</h2>
                <p>モノづくりではデータの解析からクリエイティブまで幅広いことを担当しています。新しいことを取り入れながら、ユーザーにマッチした提案を実現するのが目標です。たくさんの開発・提供が数多くありますが、特にそこを磨く作業に力を入れています。</p>
                <p>単純に形にするだけでなく、作る過程や、なぜそのようにしたのかを大事にしながらものづくりをしています。毎回課題解決テーマをもって「モノ」と向き合い制作をし、フィードバックしてもらうことで自分の中にあるモヤモヤを言葉にして「問い」への答えを出しています。</p>
                <h3>新しいことへのチャレンジ</h3>
                <p>今までと違うものを作ることで愛着が湧いてきます。そこで興味を持ったことは小さなことでもいいから取り入れて、良いものを作れるようにしています。小さなヒントから新しいものを生み出すようなモノづくりは、これからも続けていきたいです。</p>
              </Postbody>
            </TwoColumnMain>
            
            <TwoColumnSidebar>
              <Contact />
            </TwoColumnSidebar>
          </TwoColumn> */}
{/* 
          <Postbody>
                <p>Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインなど、さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。</p>
                <h2>ものづくりで目指していること</h2>
                <p>モノづくりではデータの解析からクリエイティブまで幅広いことを担当しています。新しいことを取り入れながら、ユーザーにマッチした提案を実現するのが目標です。たくさんの開発・提供が数多くありますが、特にそこを磨く作業に力を入れています。</p>
                <p>単純に形にするだけでなく、作る過程や、なぜそのようにしたのかを大事にしながらものづくりをしています。毎回課題解決テーマをもって「モノ」と向き合い制作をし、フィードバックしてもらうことで自分の中にあるモヤモヤを言葉にして「問い」への答えを出しています。</p>
                <h3>新しいことへのチャレンジ</h3>
                <p>今までと違うものを作ることで愛着が湧いてきます。そこで興味を持ったことは小さなことでもいいから取り入れて、良いものを作れるようにしています。小さなヒントから新しいものを生み出すようなモノづくりは、これからも続けていきたいです。</p>
          </Postbody> */}

          <MainContainer>
            <SectionTitle/>
            <Profile/>
            <Skills/>
            <Experience/>
          </MainContainer>


        </ContainerArticle>

  )
}