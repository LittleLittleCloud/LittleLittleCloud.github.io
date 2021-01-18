<!-- The (first) h1 will be used as the <title> of the HTML page -->
# 张晓云

<!-- The unordered list immediately after the h1 will be formatted on a single
line. It is intended to be used for contact details -->
- <g2260578356@gmail.com>
- (778) 926 2901
- github: LittleLittleCloud

<!-- The paragraph after the h1 and ul and before the first h2 is optional. It
is intended to be used for a short summary. -->
微软程序员，负责[Model Builder](https://dotnet.microsoft.com/apps/machinelearning-ai/ml-dotnet/model-builder)以及[ML.NET](https://github.com/dotnet/machinelearning)的开发和维护，现居西雅图。

## 工作经历

<!-- You have to wrap the "left" and "right" half of these headings in spans by
hand -->
### <span>SDE II, Microsoft Redmond</span> <span>Sep 2020 - 至今</span>
### <span>SDE I, Microsoft Vancouver</span> <span>Oct 2018 -- Sep 2020</span>

#### [Model Builder](https://dotnet.microsoft.com/apps/machinelearning-ai/ml-dotnet/model-builder)
- 负责AutoML Service模块的维护和开发。AutoML Service会根据数据来自动搜索预设算法，例如LightGbm, Fast tree等，以及使用SMBO来优化预设算法的超参数。并根据训练结果返回最佳模型。
- 负责Code Generator模块的维护和开发。Code Generator会根据AutoML Service的训练结果来生成最佳模型的pipeline以供用户进行微调。同时也会生成调用最佳模型的代码，以简化用户将模型整合进原工程的工作量。

#### [ML.NET](https://github.com/dotnet/machinelearning)
- 负责维护`Microsoft.ML.AutoML`以及`Microsoft.ML.CodeGenerator`两个模块。

### <span>Intern, Microsoft SuZhou</span> <span>July 2017 -- Oct 2017</span>
- 负责开发用于Cortana智能音箱的log自动分析工具。

## 项目经历

### <span>[auto-machinelearning](https://github.com/LittleLittleCloud/auto-machinelearning)</span> <span>April 2020 - 至今</span>

`auto-machinelearning`是一个基于ML.NET的第三方库。它克服了`Microsoft.ML.AutoML`的缺点，将构建pipeline，构建超参搜索空间和选择优化算法的步骤解耦，从而允许用户自定义pipeline以及超参搜索空间，并利用预设的优化算法进行超参搜索。

### <span>[AzCopyNet](https://github.com/dotnet/AzCopyNet)</span> <span>Oct 2020 - 至今</span>

`AzCopyNet`是一个轻量级的[azcopy](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10) wrapper library。由于采用了代码生成技术，百分之七十以上的代码是通过azcopy cli的文档自动生成的。因此它非常的可靠，易于使用。

## 教育经历

### <span>西安交通大学 计算机科学与技术</span> <span>2014 -- 2018</span>

  - GPA 3.7
  - 获得2017年国家奖学金

## 技能

 - 编程语言： C#, Python
