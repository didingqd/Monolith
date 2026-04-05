import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col py-[40px] gap-[32px]">
      {/* 极简顶栏导航区 */}
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-foreground">Nova Studio</h1>
          <p className="text-muted-foreground mt-[8px]">工业级控制台化极简大前端架构演示</p>
        </div>
        <div className="flex gap-[12px]">
          <Button variant="outline" className="h-[40px] rounded-md font-semibold text-[14px]">
            关于系统
          </Button>
          <Button className="h-[40px] rounded-md font-semibold text-[14px]">
            访问控制台
          </Button>
        </div>
      </header>

      <Separator className="bg-border/50" />

      {/* 两列不对称内容阵列：卡片完全遵循 20px 内部 Gutter 与强制偶数标尺 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
        {/* 左侧文章主干区 */}
        <div className="lg:col-span-2 flex flex-col gap-[20px]">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="bg-card/40 backdrop-blur-md rounded-md hover:bg-card/60 transition-colors duration-300 border-border/50">
              <CardHeader className="p-[20px]">
                <div className="flex items-center gap-[12px] mb-[12px]">
                  <Badge variant="secondary" className="rounded-[4px] h-[24px] px-[8px] font-normal">
                    前端架构
                  </Badge>
                  <span className="text-muted-foreground text-[13px] tracking-normal">2026-04-05</span>
                </div>
                <CardTitle className="text-foreground">Next.js 边缘计算与无头组件：重建秩序界限与防爆边界</CardTitle>
              </CardHeader>
              <CardContent className="px-[20px] pb-[20px]">
                <p className="text-muted-foreground">
                  在这里，我们将看到纯净的 B 端组件是如何工作的。抛弃了松散的间距，全部卡片四周保持精准的 20px padding。没有任何让人分心的额外装潢，暗色引擎展现出 Oklch 色域的极境沉浸感。中文字段落完全受限于全新的 1.8 行高体系，呈现出最高效的克制之美。
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 右侧小组件状态栏 */}
        <div className="flex flex-col gap-[20px]">
          <Card className="bg-card/40 backdrop-blur-md rounded-md border-border/50">
            <CardHeader className="p-[20px]">
              <CardTitle className="text-[16px] text-foreground">状态监测大盘</CardTitle>
            </CardHeader>
            <CardContent className="px-[20px] pb-[20px] flex flex-col gap-[12px]">
              <div className="flex justify-between items-center text-[15px]">
                <span className="text-muted-foreground">运行框架</span>
                <span className="font-semibold text-foreground">Next.js SSR</span>
              </div>
              <Separator className="bg-border/30" />
              <div className="flex justify-between items-center text-[15px]">
                <span className="text-muted-foreground">UI 核心基座</span>
                <span className="font-semibold text-foreground">Shadcn / Tailwind</span>
              </div>
              <Separator className="bg-border/30" />
              <div className="flex justify-between items-center text-[15px]">
                <span className="text-muted-foreground">页面画幅域</span>
                <span className="font-semibold text-foreground">Max-1440px / 奇数剔除</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
