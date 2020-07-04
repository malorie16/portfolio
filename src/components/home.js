import React from 'react'
import {Link} from 'react-router-dom'
import '../stylesheets/home.css'
import {MediaBox, CardPanel} from 'react-materialize'


const Home = () => {
return (
//   <div id='home-container'>
  //     <CardPanel className="heading teal lighten-4 black-text">
  //         <span>  <img src='down-arrow.svg' alt='' className='down-arrow'/> Welcome <img src='down-arrow.svg' alt='' className='down-arrow'/> </span>
  //     </CardPanel>
  //     <div className='bio'>
    //       <MediaBox src="MalorieC_HeadShots-3.png" className='headshot'/>
    //       <CardPanel className="bio-card teal lighten-4 black-text">
    //           <span id='blurb'>  Hi there! My name is Malorie Casimir. I'm a full stack web developer with experience in Rails and JavaScript. I also love web design and striking UIs. My background in opera singing taught me the importance of having attention to detail and taking muiltple perspectives into account when creating applications. Feel free to reach out to me on <a href='https://github.com/malorie16' target="_blank" rel="noopener noreferrer">Github</a>, <a href='https://www.linkedin.com/in/malorie-casimir/' target="_blank" rel="noopener noreferrer">LinkedIn</a> or <a href='https://twitter.com/MalorieCasimir' target="_blank" rel="noopener noreferrer">Twitter.</a> </span>
    //       </CardPanel>
    //     </div>
  //     <div id='stack-div'>
    //     <h3 id='tech-title'>Technology Stack</h3>
    //     <div id='tech-stack' >
      //       <div id='ruby'><img src='ruby.svg' className='stack-img' alt='Nothing to see here! Sorry! D:'/></div>
      //       <div id='computer'><img src='computer.svg' className='stack-img' alt='Nothing to see here! Sorry! D:'/></div>
      //       <div id='database'><img src='data-storage.svg' className='stack-img' alt='Nothing to see here! Sorry! D:'/></div>
      //       <div className='stack-child' id='rails'>Ruby on Rails </div>
      //       <div className='stack-child' id='frontend'> Javascript + React + Redux </div>
      //       <div id='backend'> PostgreSQL + SQLite + SQL </div>
      //     </div>
    //     </div>
  //     <h3 id='projects-h3'>Projects</h3>
  //     <div className='projects'>
    //       <div className='project-title ag'><Link to='/accessgram'>Access Gram</Link></div>
    //       <div className='project-title leef'><Link to='/leef'>Leef</Link></div>
    //       <div className='project-gif ag'><Link to='/accessgram'><img src='access-gram-gif.gif' alt='Nothing to see here! Sorry! D:' className='homegif'/></Link></div>
    //       <div className='project-gif leef'><Link to='/leef'><img src='leeflogin.gif' alt='Nothing to see here! Sorry! D:'className='homegif'/></Link></div>
    //       <div className='project-title wa'><Link to='/weatherapp'>Weather App</Link></div>
    //       <div className='project-title map'><Link to='/heatmap'>ICE Heat Map</Link></div>
    //       <div className='projGect-gif wa'><Link to='/weatherapp'><img src='weather-pew-gif.gif' alt='Nothing to see here! Sorry! D:'className='homegif'/></Link></div>
    //       <div className='project-gif map'><Link to='/heatmap'><img src='heat-map.gif' alt='Nothing to see here! Sorry! D:'className='homegif'/></Link></div>
    //     </div>
  //
  //   </div>
<div id="home-container">  
  <div className="title">
<svg id="name-logo" width="790" height="292" viewBox="0 0 790 292" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.841064 117V105.867L11.5086 103.344L11.641 76.0577L11.5126 55.832L0.841064 53.6689V41.8187L23.1891 38.8622L27.5258 42.2076L28.5109 46.1875C29.9854 44.9205 31.6143 43.7497 33.3912 42.6738L33.4016 42.6675C39.1228 39.2348 45.2208 37.488 51.6491 37.488C59.4756 37.488 65.9011 39.3913 70.36 43.725C71.681 44.9807 72.7935 46.3695 73.705 47.8814C75.6232 45.9486 77.8635 44.214 80.4072 42.6738L80.4176 42.6675C86.1388 39.2348 92.2368 37.488 98.6651 37.488C106.492 37.488 112.917 39.3913 117.376 43.725C121.83 47.9582 123.913 53.7055 123.913 60.576C123.913 64.1614 123.841 67.6769 123.695 71.1223L123.695 71.141L123.652 72.6362L123.645 72.8782L123.643 72.9412L123.638 73.1115L123.638 73.1419L123.636 73.2024L123.634 73.2771L123.632 73.3214L123.632 73.3508L123.63 73.3946L123.628 73.4811L123.627 73.5238L123.626 73.538L123.626 73.5521L123.625 73.5943L123.624 73.6083L123.623 73.6638L123.622 73.6776L123.621 73.705L123.621 73.7187L123.621 73.7323L123.62 73.7459L123.62 73.7595L123.619 73.7999L123.618 73.8133L123.618 73.8267L123.618 73.84L123.616 73.8929L123.616 73.906L123.615 73.9191L123.615 73.9452L123.614 73.9582L123.611 74.0606L123.611 74.0732L123.611 74.0858L123.61 74.0984L123.61 74.1109L123.609 74.1358L123.609 74.1482L123.607 74.2097L123.607 74.2218L123.606 74.2461L123.606 74.2581L123.605 74.2701L123.605 74.2821L123.605 74.294L123.602 74.3998L123.601 74.4113L123.601 74.4228L123.601 74.4343L123.6 74.4458L123.6 74.4685L123.599 74.4798L123.598 74.5359L123.597 74.547L123.597 74.5691L123.596 74.58L123.596 74.591L123.596 74.6127L123.595 74.6236L123.593 74.6982L123.593 74.7088L123.592 74.7192L123.592 74.7297L123.592 74.7401L123.592 74.7505L123.591 74.7608L123.589 74.842L123.589 74.852L123.588 74.8718L123.588 74.8915L123.587 74.9013L123.585 74.9782L123.585 74.9876L123.584 75.0064L123.584 75.025L123.583 75.0342L123.581 75.1068L123.581 75.1157L123.581 75.1246L123.581 75.1334L123.58 75.1422L123.58 75.151L123.58 75.1597L123.578 75.228L123.578 75.2363L123.577 75.2447L123.577 75.2529L123.577 75.2612L123.577 75.2776L123.576 75.2857L123.575 75.3258L123.575 75.3337L123.574 75.3494L123.574 75.3572L123.574 75.3649L123.574 75.3726L123.574 75.3803L123.572 75.4476L123.571 75.4549L123.571 75.4694L123.571 75.4837L123.57 75.4908L123.569 75.5393L123.569 75.5461L123.569 75.5529L123.568 75.5596L123.568 75.5663L123.568 75.5729L123.568 75.5795L123.566 75.6371L123.566 75.6433L123.566 75.6495L123.566 75.6556L123.566 75.6617L123.565 75.6738L123.565 75.6798L123.564 75.7033L123.564 75.7091L123.564 75.7205L123.564 75.7262L123.563 75.7374L123.563 75.7485L123.563 75.754L123.562 75.7861L123.562 75.7913L123.562 75.8016L123.561 75.8067L123.561 75.8117L123.561 75.8217L123.561 75.8267L123.56 75.8555L123.56 75.8602L123.56 75.8694L123.559 75.874L123.559 75.8785L123.559 75.8874L123.559 75.8918L123.558 75.9174L123.558 75.9215L123.558 75.9297L123.558 75.9337L123.558 75.9377L123.557 75.9494L123.557 75.9532L123.557 75.9682L123.557 75.9718L123.556 75.9789L123.556 75.9825L123.556 75.9859L123.556 75.9894L123.556 75.9928L123.555 76.0217L123.555 76.0247L123.555 76.0306L123.555 76.0364L123.555 76.0392L123.554 76.0579L123.554 76.0604L123.554 76.0654L123.554 76.0701L123.554 76.0725L123.554 76.0792L123.554 76.0814L123.553 76.0835L123.553 76.0856L123.884 103.34L134.569 105.867V117H94.2971V105.832L105.685 103.309L105.817 76.056V63.456C105.817 60.4731 104.842 58.2875 102.987 56.6076L102.976 56.5973L102.965 56.5868C101.109 54.8713 98.451 53.856 94.6331 53.856C90.6524 53.856 87.0499 54.7707 83.7694 56.5792C81.0017 58.105 78.7185 60.0394 76.8908 62.3887C76.8705 65.3483 76.8 68.2595 76.6792 71.1224L76.6332 72.734L76.6291 72.8782L76.6282 72.9098L76.6273 72.9412L76.6224 73.1115L76.6216 73.1419L76.6194 73.2174L76.619 73.2324L76.6185 73.2473L76.6164 73.3214L76.6156 73.3508L76.6139 73.4091L76.6127 73.4524L76.6123 73.4668L76.6106 73.5238L76.6098 73.5521L76.6094 73.5662L76.6078 73.6222L76.6074 73.6361L76.607 73.65L76.6055 73.705L76.6051 73.7187L76.6047 73.7323L76.6043 73.7459L76.6039 73.7595L76.6005 73.8797L76.6001 73.8929L76.5997 73.906L76.5993 73.9191L76.599 73.9322L76.5986 73.9452L76.5982 73.9582L76.5957 74.0479L76.5953 74.0606L76.5946 74.0858L76.5942 74.0984L76.5939 74.1109L76.5928 74.1482L76.5924 74.1606L76.5914 74.1974L76.591 74.2097L76.59 74.246L76.5897 74.2581L76.5893 74.2701L76.5886 74.294L76.5883 74.3059L76.5859 74.3882L76.5856 74.3998L76.5849 74.4228L76.5846 74.4343L76.5843 74.4457L76.583 74.4911L76.5827 74.5024L76.5824 74.5136L76.582 74.5247L76.5811 74.558L76.5808 74.569L76.5805 74.58L76.5802 74.591L76.5798 74.6019L76.5792 74.6236L76.5789 74.6343L76.5774 74.6877L76.5771 74.6982L76.5765 74.7192L76.5762 74.7297L76.5759 74.7401L76.5753 74.7608L76.575 74.7711L76.5733 74.832L76.573 74.842L76.5724 74.8619L76.5721 74.8718L76.5718 74.8817L76.5713 74.9013L76.571 74.911L76.5694 74.9687L76.5691 74.9782L76.5685 74.997L76.5683 75.0064L76.568 75.0157L76.5675 75.0342L76.5672 75.0434L76.5657 75.0979L76.5654 75.1068L76.5649 75.1246L76.5647 75.1334L76.5644 75.1422L76.5639 75.1597L76.5636 75.1683L76.5624 75.2111L76.5622 75.2196L76.5617 75.2363L76.5615 75.2447L76.5612 75.2529L76.561 75.2612L76.5608 75.2694L76.5601 75.2938L76.5598 75.3018L76.5596 75.3099L76.5594 75.3178L76.5585 75.3494L76.5583 75.3572L76.558 75.3649L76.5576 75.3803L76.5574 75.3879L76.5559 75.4403L76.5557 75.4476L76.5553 75.4621L76.5551 75.4693L76.5548 75.4765L76.5542 75.4978L76.554 75.5048L76.5534 75.5256L76.5533 75.5325L76.5527 75.5529L76.5525 75.5596L76.5523 75.5662L76.5519 75.5795L76.5517 75.586L76.5504 75.6308L76.5503 75.6371L76.5501 75.6433L76.5499 75.6495L76.5497 75.6556L76.5496 75.6617L76.5494 75.6678L76.548 75.7148L76.5479 75.7205L76.5475 75.7318L76.5474 75.7374L76.5472 75.743L76.5457 75.7964L76.5456 75.8016L76.5454 75.8067L76.5453 75.8117L76.5451 75.8167L76.5446 75.8364L76.5444 75.8413L76.5443 75.846L76.5437 75.8648L76.5436 75.8694L76.5435 75.874L76.5434 75.8785L76.5432 75.883L76.542 75.9256L76.5419 75.9297L76.5418 75.9337L76.5416 75.9416L76.5414 75.9455L76.5406 75.9754L76.5405 75.9789L76.5404 75.9825L76.5403 75.9859L76.5402 75.9894L76.5401 75.9928L76.54 75.9961L76.5394 76.0186L76.5393 76.0217L76.5391 76.0277L76.539 76.0306L76.5389 76.0335L76.5387 76.042L76.5386 76.0447L76.5384 76.0528L76.5383 76.0554L76.5381 76.0629L76.538 76.0654L76.5379 76.0678L76.5378 76.0724L76.5378 76.0747L76.5374 76.0856L76.8684 103.34L87.5531 105.867V117H47.2811V105.832L58.6687 103.309L58.8011 76.056V63.456C58.8011 60.5495 57.7883 58.3829 55.7647 56.6787L55.7429 56.6604L55.7216 56.6417C53.6513 54.8303 51.0225 53.856 47.6171 53.856C43.744 53.856 40.1578 54.7654 36.8113 56.5869C33.8619 58.1923 31.4703 60.2465 29.5982 62.7537L29.521 76.0414L29.521 76.0734L29.6537 103.383L39.6011 105.906V117H0.841064ZM26.6651 105.72L26.5211 76.056L26.6038 61.785C27.1417 60.9986 27.7209 60.2496 28.3412 59.5379C28.7511 59.0677 29.1789 58.6137 29.6248 58.176C31.291 56.5404 33.2085 55.1324 35.3771 53.952C39.1691 51.888 43.2491 50.856 47.6171 50.856C51.6491 50.856 55.0091 52.032 57.6971 54.384C60.4331 56.688 61.8011 59.712 61.8011 63.456V76.056L61.6571 105.72L50.2811 108.24V114H84.5531V108.24L73.8971 105.72L73.5371 76.056L73.6811 71.016C73.7377 69.675 73.7832 68.3229 73.8176 66.9596C73.8539 65.5198 73.8778 64.0675 73.8892 62.6028C73.8909 62.3881 73.8923 62.1731 73.8934 61.9579C73.8944 61.7685 73.8952 61.579 73.8958 61.3892C74.0922 61.1134 74.2937 60.8423 74.5002 60.576C74.7762 60.2201 75.0612 59.8728 75.3553 59.5339C75.8134 59.0059 76.2935 58.4985 76.7955 58.0116C78.4101 56.4458 80.252 55.0926 82.3211 53.952C86.0651 51.888 90.1691 50.856 94.6331 50.856C99.0011 50.856 102.457 52.032 105.001 54.384C107.545 56.688 108.817 59.712 108.817 63.456V76.056L108.673 105.72L97.2971 108.24V114H131.569V108.24L120.913 105.72L120.553 76.056L120.697 71.016C120.841 67.608 120.913 64.128 120.913 60.576C120.913 54.336 119.041 49.44 115.297 45.888C111.601 42.288 106.057 40.488 98.6651 40.488C92.8091 40.488 87.2411 42.072 81.9611 45.24C79.2808 46.8629 77.0036 48.6937 75.1296 50.7323C74.32 51.6129 73.5856 52.5324 72.9265 53.4906C72.5775 52.3421 72.1345 51.2611 71.5973 50.2478C70.7346 48.6202 69.6292 47.167 68.2811 45.888C64.5851 42.288 59.0411 40.488 51.6491 40.488C45.7931 40.488 40.2251 42.072 34.9451 45.24C32.8196 46.527 30.9476 47.9447 29.3291 49.493C28.8529 49.9487 28.3985 50.4156 27.9662 50.8939C27.8679 51.0026 27.7708 51.1119 27.6747 51.2218C27.3203 51.6275 26.9814 52.0411 26.6578 52.4627L26.6651 51.216L24.8651 43.944L22.3451 42L3.84106 44.448V51.216L14.4971 53.376L14.6411 76.056L14.4971 105.72L3.84106 108.24V114H36.6011V108.24L26.6651 105.72ZM187.442 111.618L187.436 111.612C182.915 107.203 180.698 101.555 180.698 94.92C180.698 87.5983 185.395 81.4496 193.22 76.3505L193.228 76.3457C200.553 71.603 211.495 67.8921 225.803 65.0724C225.181 60.6815 223.873 57.7864 222.17 56.058L222.162 56.0504L222.155 56.0428C219.585 53.3985 215.607 51.84 209.69 51.84C205.544 51.84 202.145 52.4274 199.414 53.5032L199.395 53.5105L199.377 53.5175C196.405 54.6432 194.066 55.9067 192.293 57.2679L190.163 58.9024L183.242 51.6994L184.313 49.7638C185.989 46.7347 189.458 44.0442 193.969 41.542C198.965 38.7215 205.154 37.416 212.354 37.416C221.692 37.416 229.416 39.9795 235.148 45.4333C241.131 51.0287 243.791 60.3382 243.938 72.4194L243.938 72.4235L244.273 103.341L254.954 105.867V117H232.783L227.744 111.072C221.783 115.763 214.733 118.08 206.738 118.08C198.695 118.08 192.089 116.093 187.449 111.625L187.442 111.618ZM230.498 109.68L234.17 114H251.954V108.24L241.298 105.72L240.938 72.456C240.794 60.648 238.178 52.368 233.09 47.616C228.05 42.816 221.138 40.416 212.354 40.416C205.49 40.416 199.85 41.664 195.434 44.16C191.018 46.608 188.186 48.96 186.938 51.216L190.466 54.888C192.53 53.304 195.146 51.912 198.314 50.712C201.482 49.464 205.274 48.84 209.69 48.84C216.122 48.84 220.994 50.544 224.306 53.952C226.581 56.2602 228.064 59.7803 228.753 64.5124C228.888 65.4345 228.992 66.4027 229.066 67.4169C229.068 67.4458 229.07 67.4749 229.072 67.5039C228.508 67.6076 227.95 67.7126 227.397 67.8188C226.962 67.9021 226.532 67.9863 226.104 68.0712C212.089 70.8535 201.674 74.4511 194.858 78.864C187.418 83.712 183.698 89.064 183.698 94.92C183.698 100.824 185.642 105.672 189.53 109.464C193.418 113.208 199.154 115.08 206.738 115.08C214.178 115.08 220.61 112.92 226.034 108.6C226.389 108.32 226.732 108.039 227.064 107.757C228.019 106.944 228.878 106.123 229.638 105.295L230.498 109.68ZM229.195 73.3147C228.171 73.4818 227.17 73.6574 226.192 73.8415C217.589 75.4604 210.744 77.7346 205.658 80.664C199.658 84.12 196.658 88.536 196.658 93.912C196.658 98.232 198.17 101.496 201.194 103.704C204.266 105.864 208.034 106.944 212.498 106.944C217.202 106.944 221.45 105.576 225.242 102.84C225.523 102.633 225.796 102.428 226.059 102.223C227.25 101.297 228.254 100.389 229.072 99.5L229.195 73.3147ZM226.077 98.266L226.178 76.8984C218.051 78.4704 211.748 80.6186 207.156 83.2636C201.777 86.3619 199.658 89.923 199.658 93.912C199.658 97.4311 200.832 99.7155 202.943 101.266C205.416 102.998 208.545 103.944 212.498 103.944C216.572 103.944 220.202 102.774 223.477 100.415C224.526 99.6439 225.383 98.9269 226.077 98.266ZM302.324 117V105.819L314 103.296L314.132 76.063V76.0414L313.994 17.4839L300.596 15.3229V3.32485L324.817 0.542694L329.142 0.776434L332.23 4.93936L332.084 76.0414V76.0621L332.217 103.309L343.604 105.832V117H302.324ZM329.228 105.72L329.084 76.056L329.228 5.92798L327.572 3.69598L324.908 3.55198L303.596 5.99998V12.768L316.988 14.928L317.132 76.056L316.988 105.72L305.324 108.24V114H340.604V108.24L329.228 105.72ZM402.989 107.345L402.981 107.337C395.38 99.7364 391.663 89.8616 391.663 78C391.663 66.857 395.361 57.2586 402.767 49.3835C410.263 41.3636 420.091 37.416 431.959 37.416C443.804 37.416 453.652 41.0752 461.21 48.5764C468.822 56.0355 472.543 65.7992 472.543 77.568C472.543 88.6632 468.869 98.3166 461.537 106.371C454.092 114.55 444.277 118.584 432.391 118.584C420.535 118.584 410.643 114.894 402.996 107.352L402.989 107.345ZM459.103 50.712C452.191 43.848 443.143 40.416 431.959 40.416C420.823 40.416 411.823 44.088 404.959 51.432C398.095 58.728 394.663 67.584 394.663 78C394.663 89.184 398.143 98.256 405.103 105.216C412.111 112.128 421.207 115.584 432.391 115.584C443.527 115.584 452.503 111.84 459.319 104.352C466.135 96.864 469.543 87.936 469.543 77.568C469.543 66.48 466.063 57.528 459.103 50.712ZM416.099 58.1289C412.524 62.3668 410.577 68.382 410.623 76.5434C410.668 84.7056 412.754 91.4343 416.742 96.8949C420.61 102.146 425.555 104.664 431.815 104.664C438.789 104.664 443.853 102.263 447.433 97.6324C451.148 92.7761 453.151 86.1824 453.151 77.568C453.151 69.7666 451.1 63.588 447.2 58.7981C443.382 54.1079 438.397 51.768 431.959 51.768C424.764 51.768 419.633 53.9946 416.099 58.1289ZM449.815 99.456C454.039 93.936 456.151 86.64 456.151 77.568C456.151 69.216 453.943 62.328 449.527 56.904C445.111 51.48 439.255 48.768 431.959 48.768C424.087 48.768 418.039 51.24 413.815 56.184C409.639 61.128 407.575 67.92 407.623 76.56C407.671 85.248 409.903 92.616 414.319 98.664C418.735 104.664 424.567 107.664 431.815 107.664C439.591 107.664 445.591 104.928 449.815 99.456ZM521.26 117V105.867L531.928 103.344L532.06 76.075V76.0414L531.932 55.832L521.26 53.6689V41.8174L543.681 38.8627L548.017 42.2076L549.016 46.2443C549.918 45.5388 550.868 44.8675 551.868 44.2301C557.369 40.6721 564.167 39 572.068 39H582.124V63.72H569.046L566.628 54.6878C563.806 54.962 560.801 55.744 557.6 57.0803C554.795 58.252 552.295 59.9159 550.093 62.097L550.012 76.0414V76.0734L550.145 103.309L561.532 105.832V117H521.26ZM547.156 105.72L547.012 76.056L547.1 60.8795C547.212 60.759 547.324 60.6397 547.436 60.5217C548.286 59.6322 549.179 58.8119 550.117 58.0609C552.041 56.5198 554.15 55.2702 556.444 54.312C560.812 52.488 564.964 51.576 568.9 51.576L571.348 60.72H579.124V42H572.068C564.58 42 558.388 43.584 553.492 46.752C552.166 47.5973 550.94 48.5025 549.814 49.4676C549.253 49.949 548.716 50.4453 548.205 50.9565C548.117 51.0441 548.03 51.1321 547.944 51.2206C547.673 51.4992 547.408 51.7823 547.151 52.0696L547.156 51.216L545.356 43.944L542.836 42L524.26 44.448V51.216L534.916 53.376L535.06 76.056L534.916 105.72L524.26 108.24V114H558.532V108.24L547.156 105.72ZM628.129 117V105.801L640.237 103.278L640.369 76.0833L639.92 55.8976L627.769 53.7277V41.7925L650.602 39H655.882L658.838 44.0117L658.321 76.0414L658.453 103.309L669.841 105.832V117H628.129ZM655.465 105.72L655.321 76.056L655.825 44.808L654.169 42H650.785L630.769 44.448V51.216L642.865 53.376L643.369 76.056L643.225 105.72L631.129 108.24V114H666.841V108.24L655.465 105.72ZM640.255 26.2807L640.239 26.2653C637.963 23.9885 636.913 21.0473 636.913 17.736C636.913 14.36 637.841 11.3172 640.095 9.06266L640.112 9.04634L640.128 9.03028C642.436 6.79268 645.54 5.87998 648.985 5.87998C652.35 5.87998 655.346 6.90405 657.642 9.19044C659.969 11.4596 661.057 14.4052 661.057 17.736C661.057 21.1291 660.094 24.1767 657.786 26.4249C655.516 28.6858 652.416 29.592 648.985 29.592C645.609 29.592 642.604 28.5627 640.27 26.2958L640.255 26.2807ZM655.681 24.288C657.265 22.752 658.057 20.568 658.057 17.736C658.057 15.096 657.217 12.96 655.537 11.328C653.905 9.69598 651.721 8.87998 648.985 8.87998C646.057 8.87998 643.801 9.64798 642.217 11.184C640.681 12.72 639.913 14.904 639.913 17.736C639.913 20.376 640.729 22.512 642.361 24.144C644.041 25.776 646.249 26.592 648.985 26.592C651.913 26.592 654.145 25.824 655.681 24.288ZM729.143 107.345L729.136 107.337C721.535 99.7364 717.817 89.8616 717.817 78C717.817 66.9256 721.205 57.3569 728.05 49.4723C734.99 41.4281 744.118 37.416 755.161 37.416C765.139 37.416 773.331 40.3793 779.344 46.6045C784.995 52.409 788.289 60.2837 789.455 69.9452L789.625 70.0584V71.5179L789.932 74.664H789.625V78.984H736.845C737.252 86.8962 739.47 92.6521 743.164 96.6101C747.299 100.994 752.603 103.224 759.337 103.224C764.156 103.224 767.93 102.734 770.752 101.849L770.764 101.846C773.743 100.925 776.318 99.6503 778.519 98.0418L780.77 96.3972L787.795 104.662L786.366 106.578C783.768 110.06 780.123 112.901 775.583 115.171L775.57 115.177C770.862 117.504 765.141 118.584 758.545 118.584C746.689 118.584 736.798 114.894 729.15 107.352L729.143 107.345ZM740.977 98.664C745.729 103.704 751.849 106.224 759.337 106.224C764.329 106.224 768.433 105.72 771.649 104.712C774.913 103.704 777.793 102.288 780.289 100.464L783.961 104.784C781.705 107.808 778.465 110.376 774.241 112.488C770.065 114.552 764.833 115.584 758.545 115.584C747.361 115.584 738.265 112.128 731.257 105.216C724.297 98.256 720.817 89.184 720.817 78C720.817 67.584 723.985 58.728 730.321 51.432C736.657 44.088 744.937 40.416 755.161 40.416C764.521 40.416 771.865 43.176 777.193 48.696C781.785 53.4118 784.754 59.7497 786.102 67.7097C786.155 68.0253 786.206 68.3433 786.255 68.664C786.402 69.6404 786.525 70.6404 786.625 71.664V75.984H733.777C733.776 76.1751 733.776 76.3671 733.777 76.56C733.781 77.3846 733.802 78.1926 733.841 78.984C734.253 87.4509 736.631 94.0109 740.977 98.664ZM734.819 66.072C734.599 67.0374 734.413 68.0374 734.262 69.072H774.548C774.411 68.0336 774.24 67.0336 774.038 66.072C773.025 61.2663 771.197 57.4183 768.553 54.528C765.001 50.592 759.961 48.624 753.433 48.624C747.577 48.624 742.825 51.12 739.177 56.112C737.159 58.8737 735.706 62.1937 734.819 66.072ZM770.966 66.072C770.018 61.9719 768.436 58.8447 766.339 56.5527L766.333 56.5453L766.326 56.5379C763.471 53.3741 759.324 51.624 753.433 51.624C748.595 51.624 744.719 53.6124 741.599 57.882C739.97 60.1116 738.722 62.8264 737.904 66.072H770.966Z" fill="#2F52A0"/>
<path d="M6.67236 255.8C6.67236 266.456 9.96036 275.096 16.5364 281.72C23.1604 288.296 31.4644 291.584 41.4484 291.584C49.9924 291.584 56.5924 290.072 61.2484 287.048C65.9044 283.976 69.3604 280.928 71.6164 277.904L67.9444 273.584C65.3044 276.032 62.2804 278.096 58.8724 279.776C55.4644 281.408 51.2644 282.224 46.2724 282.224C38.7844 282.224 32.4724 279.704 27.3364 274.664C22.2484 269.576 19.6804 262.808 19.6324 254.36C19.5844 244.52 21.6724 237.08 25.8964 232.04C30.1204 226.952 35.1604 224.408 41.0164 224.408C45.3844 224.408 49.0804 225.416 52.1044 227.432C55.1284 229.4 56.8564 231.8 57.2884 234.632L66.0004 225.776C63.3604 222.752 59.9764 220.448 55.8484 218.864C51.7204 217.232 46.7764 216.416 41.0164 216.416C31.8004 216.416 23.7604 220.208 16.8964 227.792C10.0804 235.376 6.67236 244.712 6.67236 255.8ZM56.0644 228.8L59.1604 243.416H66.2884V217.856H59.7364L56.0644 228.8Z" fill="#2F52A0"/>
<path d="M122.425 270.92C122.425 276.824 124.369 281.672 128.257 285.464C132.145 289.208 137.881 291.08 145.465 291.08C152.905 291.08 159.337 288.92 164.761 284.6C170.233 280.28 172.921 275.744 172.825 270.992H170.377C169.897 273.44 167.761 276.056 163.969 278.84C160.177 281.576 155.929 282.944 151.225 282.944C146.761 282.944 142.993 281.864 139.921 279.704C136.897 277.496 135.385 274.232 135.385 269.912C135.385 264.536 138.385 260.12 144.385 256.664C150.385 253.208 158.833 250.664 169.729 249.032L169.081 243.272C152.905 246.152 141.073 250.016 133.585 254.864C126.145 259.712 122.425 265.064 122.425 270.92ZM125.665 227.216L129.193 230.888C131.257 229.304 133.873 227.912 137.041 226.712C140.209 225.464 144.001 224.84 148.417 224.84C154.849 224.84 159.721 226.544 163.033 229.952C166.345 233.312 167.977 239.24 167.929 247.736L167.785 278.336L169.225 285.68L172.897 290H190.681V284.24L180.025 281.72L179.665 248.456C179.521 236.648 176.905 228.368 171.817 223.616C166.777 218.816 159.865 216.416 151.081 216.416C144.217 216.416 138.577 217.664 134.161 220.16C129.745 222.608 126.913 224.96 125.665 227.216Z" fill="#2F52A0"/>
<path d="M242.323 290H248.875L253.411 281.504L250.027 265.592H242.323V290ZM244.987 235.352C244.987 240.584 246.475 244.736 249.451 247.808C252.475 250.88 257.923 253.568 265.795 255.872C273.667 258.176 279.139 260.312 282.211 262.28C285.283 264.248 286.819 267.248 286.819 271.28C286.819 275.264 285.307 278.36 282.283 280.568C279.307 282.776 275.419 283.88 270.619 283.88C266.059 283.88 261.859 282.704 258.019 280.352C254.227 278 251.827 275.336 250.819 272.36L244.195 276.752C247.699 281.216 251.515 284.792 255.643 287.48C259.771 290.12 265.339 291.44 272.347 291.44C280.075 291.44 286.267 289.28 290.923 284.96C295.579 280.64 297.907 275.432 297.907 269.336C297.907 262.376 295.675 257.24 291.211 253.928C286.795 250.568 280.891 247.856 273.499 245.792C265.963 243.68 261.139 241.784 259.027 240.104C256.963 238.424 255.931 236.096 255.931 233.12C255.931 230.288 256.915 227.984 258.883 226.208C260.899 224.384 264.091 223.472 268.459 223.472C271.819 223.472 275.083 224.192 278.251 225.632C281.467 227.024 283.867 228.392 285.451 229.736L288.907 223.976C286.939 222.008 284.395 220.256 281.275 218.72C278.155 217.184 273.787 216.416 268.171 216.416C260.299 216.416 254.467 218.264 250.675 221.96C246.883 225.608 244.987 230.072 244.987 235.352ZM281.347 226.352L284.155 239.312H291.787V218H285.235L281.347 226.352Z" fill="#2F52A0"/>
<path d="M351.481 290H387.193V284.24L375.817 281.72L375.673 252.056L376.177 220.808L374.521 218H371.137L351.121 220.448V227.216L363.217 229.376L363.721 252.056L363.577 281.72L351.481 284.24V290ZM360.265 193.736C360.265 196.376 361.081 198.512 362.713 200.144C364.393 201.776 366.601 202.592 369.337 202.592C372.265 202.592 374.497 201.824 376.033 200.288C377.617 198.752 378.409 196.568 378.409 193.736C378.409 191.096 377.569 188.96 375.889 187.328C374.257 185.696 372.073 184.88 369.337 184.88C366.409 184.88 364.153 185.648 362.569 187.184C361.033 188.72 360.265 190.904 360.265 193.736Z" fill="#2F52A0"/>
<path d="M442.034 290H474.794V284.24L464.858 281.72L464.714 252.056L464.858 227.216L463.058 219.944L460.538 218L442.034 220.448V227.216L452.69 229.376L452.834 252.056L452.69 281.72L442.034 284.24V290ZM464.498 238.232C466.754 234.776 469.778 232.016 473.57 229.952C477.362 227.888 481.442 226.856 485.81 226.856C489.842 226.856 493.202 228.032 495.89 230.384C498.626 232.688 499.994 235.712 499.994 239.456V252.056L499.85 281.72L488.474 284.24V290H522.746V284.24L512.09 281.72L511.73 252.056C511.73 252.056 511.778 250.376 511.874 247.016C512.018 243.608 512.09 240.128 512.09 236.576C512.09 230.336 510.218 225.44 506.474 221.888C502.778 218.288 497.234 216.488 489.842 216.488C483.986 216.488 478.418 218.072 473.138 221.24C467.906 224.408 464.21 228.368 462.05 233.12L464.498 238.232ZM511.514 238.232C513.77 234.776 516.77 232.016 520.514 229.952C524.258 227.888 528.362 226.856 532.826 226.856C537.194 226.856 540.65 228.032 543.194 230.384C545.738 232.688 547.01 235.712 547.01 239.456V252.056L546.866 281.72L535.49 284.24V290H569.762V284.24L559.106 281.72L558.746 252.056C558.746 252.056 558.794 250.376 558.89 247.016C559.034 243.608 559.106 240.128 559.106 236.576C559.106 230.336 557.234 225.44 553.49 221.888C549.794 218.288 544.25 216.488 536.858 216.488C531.002 216.488 525.434 218.072 520.154 221.24C514.922 224.408 511.226 228.368 509.066 233.12L511.514 238.232Z" fill="#2F52A0"/>
<path d="M624.699 290H660.411V284.24L649.035 281.72L648.891 252.056L649.395 220.808L647.739 218H644.355L624.339 220.448V227.216L636.435 229.376L636.939 252.056L636.795 281.72L624.699 284.24V290ZM633.483 193.736C633.483 196.376 634.299 198.512 635.931 200.144C637.611 201.776 639.819 202.592 642.555 202.592C645.483 202.592 647.715 201.824 649.251 200.288C650.835 198.752 651.627 196.568 651.627 193.736C651.627 191.096 650.787 188.96 649.107 187.328C647.475 185.696 645.291 184.88 642.555 184.88C639.627 184.88 637.371 185.648 635.787 187.184C634.251 188.72 633.483 190.904 633.483 193.736Z" fill="#2F52A0"/>
<path d="M715.251 290H749.523V284.24L738.147 281.72L738.003 252.056L738.147 227.216L736.347 219.944L733.827 218L715.251 220.448V227.216L725.907 229.376L726.051 252.056L725.907 281.72L715.251 284.24V290ZM736.347 238.952C739.371 235.016 743.067 232.136 747.435 230.312C751.803 228.488 755.955 227.576 759.891 227.576L762.339 236.72H770.115V218H763.059C755.571 218 749.379 219.584 744.483 222.752C739.587 225.872 736.059 229.808 733.899 234.56L736.347 238.952Z" fill="#2F52A0"/>
</svg>

  </div>
  <div>
    Full Stack Web Developer
  </div>
  <div>
    <a href="https://www.linkedin.com/in/malorie-casimir/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
  </div>
</div>
)
}

export default Home