"use client"
import React from "react";
import Image from 'next'
import { Tabs, Tab, Divider, Button, Card, CardBody } from '@nextui-org/react'
import {
  IconFriendsCircle,
  IconTrace,
  IconOptimize,
  IconThreeHexagons,
  IconGraphicStitchingFour,
  IconTrendTwo,
  IconChartPie,
} from '@/app/icons/icon-park'

export default function SectionOne() {
  return (
    <section className="mt-[120px] bg-white/75">
      <div className="container mx-auto ">
        <div className="min-h-[480px] min-w-[350px] sm:min-w-[480px] px-4 py-6">
          <div className="flex flex-col h-full">
            <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold px-4">为企业定制的数字化方案</h2>
            <div className="mt-2 flex-1">
              <Tabs
                classNames={{
                  wrapper: 'h-full',
                  tabList: 'rounded-none h-full ',
                  tab: 'flex-[0_0_0] justify-start',
                  tabContent: "group-data-[selected=true]:font-bold group-data-[selected=true]:text-white text-gray-700",
                  panel: 'flex-1',
                  cursor: 'bg-gradient-to-br from-red-500 to-yellow-500'
                }}
                variant="light"
                size="lg"
                radius="md"
                isVertical={true}>
                <Tab key="1" title={
                  <div className="flex items-center gap-1">
                    <IconFriendsCircle theme="filled" size="20" strokeWidth={2} />
                    <span>引流推广</span>
                  </div>
                }>
                  {/* <div className="h-full flex flex-col">
                        <div className="flex-1 space-y-4 ">
                          <p className="mb-2">为企业提供多渠道推广和营销方案</p>
                          <div>
                            <b>社交媒体营销</b>
                            <p className="text-gray-500">营销策略制定、内容创作、广告投放、社群管理</p>
                          </div>
                          <div>
                            <b>搜索引擎优化（SEO）和搜索引擎营销（SEM）</b>
                            <p className="text-gray-500">优化网站内容和结构，提高自然搜索排名，以及通过竞价广告增加曝光</p>
                          </div>
                          <div>
                            <b>内容营销</b>
                            <p className="text-gray-500">短视频、社区帖子、公众号文章等内容制作和分发策略</p>
                          </div>
                          <div>
                            <b>合作伙伴和联盟营销</b>
                            <p className="text-gray-500">与其他公司、影响者合作，进行联合推广</p>
                          </div>

                          <div className="my-2 flex items-center justify-center channel-list space-x-2">
                            <div>
                              <img className="w-[24px]" src="https://cdn2.weimob.com/saas/@assets/saas-fe-mj-web-stc/_next/static/media/img1.80ff3444.png" alt="" />
                            </div>
                            <div>
                              <img className="w-[24px]" src="https://cdn2.weimob.com/saas/@assets/saas-fe-mj-web-stc/_next/static/media/img2.390c763c.png" alt="" />
                            </div>
                            
                            <div>
                              <img className="w-[24px]" src="https://cdn2.weimob.com/saas/@assets/saas-fe-mj-web-stc/_next/static/media/img10.6cb17807.png" alt="" />
                            </div>
                              
                            <div>
                              <img className="w-[36px]" src="https://cdn2.weimob.com/saas/@assets/saas-fe-mj-web-stc/_next/static/media/img12.b5cc20de.png" alt="" />
                            </div>
                            <div>
                              <img className="w-[48px]" src="https://cdn2.weimob.com/saas/@assets/saas-fe-mj-web-stc/_next/static/media/icon6.f68feffb.png" alt="" />
                            </div>
                            
                          </div>
                        </div>                      
                      </div> */}
                  <Card className="h-full" shadow="none">
                    <CardBody>
                      <div className="h-full grid grid-cols-2 grid-rows-2 ">
                        <div className="">
                          <p>社交媒体营销</p>
                        </div>
                        <div>
                          <p>搜索引擎优化（SEO）和搜索引擎营销（SEM）</p>
                        </div>
                        <div>
                          <p>内容营销</p>
                        </div>
                        <div className="">
                          <p>合作伙伴和联盟营销</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Tab>
                <Tab key="2" title={
                  <div className="flex items-center gap-1">
                    <IconTrace theme="filled" size="20" strokeWidth={2} />
                    <span>追踪优化</span>
                  </div>
                }>
                  <div className="h-full flex flex-col">
                    <div className="flex-1 space-y-4 ">
                      <div>为企业提供各环节的埋点布署方案、以及优化方案</div>
                      <div>
                        <b>用户行为分析</b>
                        <div className="text-gray-500">通过埋点和数据分析工具监测用户行为，提供用户画像分析。</div>
                      </div>
                      <div>
                        <b>A/B测试</b>
                        <div className="text-gray-500">不同版本的页面和功能进行测试，找到最佳解决方案。</div>
                      </div>
                      <div>
                        <b>实时数据监控</b>
                        <div className="text-gray-500">实时跟踪和报告关键指标，快速发现问题并优化。</div>
                      </div>
                      <div>
                        <b>用户反馈收集</b>
                        <div className="text-gray-500">通过调查问卷、反馈表等工具收集用户意见和建议。</div>
                      </div>

                    </div>
                    {/* <div className="text-center py-2">
                          <Button size="lg" radius="sm" variant="solid" className="bg-gradient-to-br from-red-500 to-yellow-500 text-white">
                            了解更多
                          </Button>
                        </div> */}
                  </div>
                </Tab>

                <Tab key="3" title={
                  <div className="flex items-center gap-1">
                    <IconOptimize theme="filled" size="20" strokeWidth={2} />
                    <span>线索转化</span>
                  </div>
                }>

                  <div className="h-full flex flex-col">
                    <div className="flex-1 space-y-4 ">
                      <div>线索转化（官网、mini site、landing page）</div>
                      <div>
                        <b>用户体验设计（UX/UI）</b>
                        <div className="text-gray-500">优化网站和页面设计，提高用户留存和转化率。</div>
                      </div>
                      <div>
                        <b>营销自动化</b>
                        <div className="text-gray-500">通过自动化工具跟踪和管理线索，提供个性化跟进策略。</div>
                      </div>
                      <div>
                        <b>多语言支持（国际化）</b>
                        <div className="text-gray-500">针对国际市场提供多语言网站和页面。</div>
                      </div>
                      <div>
                        <b>互动功能</b>
                        <div className="text-gray-500">如在线聊天、互动表单等，增加用户参与度。</div>
                      </div>
                    </div>
                    {/* <div className="text-center py-2">
                          <Button size="lg" radius="sm" variant="solid" className="bg-gradient-to-br from-red-500 to-yellow-500 text-white">
                            了解更多
                          </Button>
                        </div> */}
                  </div>
                </Tab>
                <Tab key="4" title={
                  <div className="flex items-center gap-1">
                    <IconGraphicStitchingFour theme="filled" size="20" strokeWidth={2} />
                    <span>系统集成</span>
                  </div>
                }>
                  <div className="h-full flex flex-col">
                    <div className="flex-1 space-y-4 ">
                      <div>提供系统级的数据打通和集成方案，帮助企业实现各个系统之间的数据互联互通，提升运营效率和客户满意度。</div>
                      <div>
                        <b>订单管理集成</b>
                        <div className="text-gray-500">提供从订单创建到交付的全流程管理，包括订单处理、跟踪和履行，确保订单状态实时更新和透明。</div>
                      </div>
                      <div>
                        <b>客户关系管理（CRM）集成</b>
                        <div className="text-gray-500">将面向客户的系统与企业内部的CRM系统无缝集成，实现客户信息和订单状态的统一管理</div>
                      </div>
                      <div>
                        <b>供应链和物流管理集成</b>
                        <div className="text-gray-500">与供应链和物流系统深度集成，实时同步库存、运输和交付信息，确保订单按时履行并提高供应链效率。</div>
                      </div>
                      <div>
                        <b>跨系统数据打通</b>
                        <div className="text-gray-500">实现企业面向用户的系统与内部各业务系统的数据同步和整合，确保数据的一致性和准确性</div>
                      </div>
                    </div>
                    {/* <div className="text-center py-2">
                          <Button size="lg" radius="sm" variant="solid" className="bg-gradient-to-br from-red-500 to-yellow-500 text-white">
                            了解更多
                          </Button>
                        </div> */}
                  </div>
                </Tab>
                <Tab key="5" title={
                  <div className="flex items-center gap-1">
                    <IconTrendTwo theme="filled" size="20" strokeWidth={2} />
                    <span>内部提效</span>
                  </div>
                }>
                  <div className="h-full flex flex-col">
                    <div className="flex-1 space-y-4 ">
                      <p>企业内部数字化系统的搭建和布署</p>
                      <div>
                        <b>协同办公工具</b>
                        <div className="text-gray-500">如项目管理软件、团队协作平台、在线会议系统等。</div>
                      </div>
                      <div>
                        <b>人力资源管理系统（HRM）</b>
                        <div className="text-gray-500">包括招聘、培训、考勤、绩效管理等模块。</div>
                      </div>
                      <div>
                        <b>财务管理系统</b>
                        <div className="text-gray-500">自动化财务流程、报表生成、预算管理等。</div>
                      </div>
                      <div>
                        <b>文档管理系统</b>
                        <div className="text-gray-500">文档存储、共享、版本控制等功能。</div>
                      </div>
                    </div>
                    {/* <div className="text-center py-2">
                          <Button size="lg" radius="sm" variant="solid" className="bg-gradient-to-br from-red-500 to-yellow-500 text-white">
                            了解更多
                          </Button>
                        </div> */}
                  </div>

                </Tab>
                <Tab key="6" title={
                  <div className="flex items-center gap-1">
                    <IconChartPie theme="filled" size="20" strokeWidth={2} />
                    <span>商业分析</span>
                  </div>
                }>
                  <div className="h-full flex flex-col">
                    <div className="flex-1 space-y-4 ">
                      <div>为企业提供BI、数据可视化方案</div>
                      <div>
                        <b>自助分析工具</b>
                        <div className="text-gray-500">提供用户自定义报表和分析的工具，支持拖拽操作。</div>
                      </div>
                      <div>
                        <b> 高级分析功能</b>
                        <div className="text-gray-500">如预测分析、数据挖掘、机器学习模型等</div>
                      </div>
                      <div>
                        <b>数据整合和清洗</b>
                        <div className="text-gray-500">从多个数据源采集数据，进行清洗、转换和整合。</div>
                      </div>
                      <div>
                        <b>可视化仪表盘</b>
                        <div className="text-gray-500">实时更新的仪表盘，展示关键业务指标和趋势。</div>
                      </div>
                    </div>
                    {/* <div className="text-center py-2">
                          <Button size="lg" radius="sm" variant="solid" className="bg-gradient-to-br from-red-500 to-yellow-500 text-white">
                            了解更多
                          </Button>
                        </div> */}
                  </div>
                </Tab>
              </Tabs>

            </div>

          </div>
        </div>
      </div>

    </section>
  )
}