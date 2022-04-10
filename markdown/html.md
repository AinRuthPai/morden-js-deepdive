# HTML5

- HTML(HyperText Markup Language)은 웹페이지를 기술하기 위한 마크업 언어이다. 조금 더 자세히 말하면 웹페이지의 내용(content)과 구조 (structure)을 담당하는 언어로써 HTML 태그를 통해 정보를 구조화하는 것이다.

  - HTML5 문서는 반드시 <!DOCTYPE html>으로 시작하여 문서 형식(document type)을 HTML5로 지정한다.
  - 실제적인 HTML document는 2행부터 시작되는데 <html>과 </html>사이에 기술한다.
  - <head>와 </head> 사이에는 document title, 외부 파일의 참조, 메타데이터의 설정 등이 위치하며 이 정보들은 브라우저에 표시되지 않는다.
  - 웹 브라우저에 출력되는 모든 요소는 <body>와 </body> 사이에 위치한다.

## 요소 (Element)

- HTML 요소는 시작 태그(start tag)와 종료 태그(end tag) 그리고 태그 사이에 위치한 content로 구성된다.
- HTML document는 요소들의 집합으로 이루어진다.
- 태그는 대소문자를 구별하지 않으나 W3C에서는 HTML4의 경우 소문자를 추천하고 있으므로 HTML5에서도 소문자를 사용하는 것이 일반적이다.

### 요소의 중첩 (Nested Element)

- 요소는 중첩될 수 있다. 즉, 요소는 다른 요소를 포함할 수 있다. 이 때 부자관계가 성립된다. 이러한 부자관계로 정보를 구조화하는 것이다.

### 빈 요소 (Empty Element)

- content를 가질 수 없는 요소를 빈 요소라 한다. 아래의 예와 같이 빈 요소는 content가 없으며(필요가 없다)어트리뷰트(Attribute)만을 가질 수 있다.

  - br, hr, img, input, link, meta

### 어트리뷰트 (Attribute)

- 어트리뷰트란 요소의 성질, 특징을 정의하는 명세이다. 요소는 어트리뷰트를 가질 수 있으며 어트리뷰트는 요소에 추가적 정보(예를 들어 이미지 파일의 경로, 크기 등)를 제공한다. 어트리뷰트는 시작 태그에 위치해야 하며 이름과 값의 쌍을 이룬다.

### 글로벌 어트리뷰트 (HTML Global Attribute)

- 글로벌 어트리뷰트는 모든 HTML 요소가 공통으로 사용할 수 있는 어트리뷰트다. 몇몇 요소에는 효과가 적용되지 않을 수 있지만, 글로벌 어트리뷰트는 대체로 모든 요소에 사용될 수 있다.

  - id : 유일한 식별자(id)를 요소에 지정한다. 중복 지정이 불가하다.
  - class : 스타일시트에 정의된 class를 요소에 지정한다. 중복 지정이 가능하다.
  - hidden : css의 hidden과는 다르게 의미상으로도 브라우저에 노출되지 않게 된다.
  - lang : 지정된 요소의 언어를 지정한다. 검색엔진의 크롤링 시 웹페이지의 언어를 인식할 수 있게 한다.
  - style : 요소에 인라인 스타일을 지정한다.
  - tabindex : 사용자가 키보드로 페이지를 내비게이션 시 이동 순서를 지정한다.
  - title : 요소에 관한 제목을 지정한다.

### 주석 (Comments)

- 주석(comment)는 주로 개발자에게 코드를 설명하기 위해 사용되며 브라우저는 주석을 화면에 표시하지 않는다.

## 시맨틱 웹(Semantic Web)

- 시맨틱 태그란 브라우저, 검색엔진, 개발자 모두에게 콘텐츠의 의미를 명확히 설명하는 역할을 한다.

- 시맨틱 웹이란 웹에 존재하는 수많은 웹페이지들에 메타데이터(Metadata)를 부여하여, 기존의 잡다한 데이터 집합이었던 웹페이지를 ‘의미’와 ‘관련성’을 가지는 거대한 데이터베이스로 구축하고자 하는 발상이다.

- HTML 요소는 non-semantic 요소, semantic 요소로 구분할 수 있다.

  - non-semantic 요소
    div, span 등이 있으며 이들 태그는 content에 대하여 어떤 설명도 하지 않는다.
  - semantic 요소
    form, table, img 등이 있으며 이들 태그는 content의 의미를 명확히 설명한다,

- HTML5에서 새롭게 추가된 시맨틱 태그

  - header : 헤더를 의미한다.
  - nav : 내비게이션을 의미한다.
  - aside : 사이드에 위치하는 공간을 의미한다.
  - section : 본문의 여러 내용(article)을 포함하는 공간을 의미한다.
  - article : 분문의 주내용이 들어가는 공간을 의미한다.
  - footer : 푸터를 의미한다.

### 문서 형식 정의 tag

### html tag

- html 태그는 모든 HTML 요소의 부모 요소이며 웹페이지에 단 하나만 존재한다. 즉, 모든 요소는 html 요소의 자식 요소이며 html 요소 내부에 기술해야 한다. 단 <!DOCTYPE>는 예외이다.

### head tag

- head 요소는 메타데이터를 포함하기 위한 요소이며 웹페이지에 단 하나만 존재한다. 메타데이터는 HTML 문서의 title, style, link, script에 대한 데이터로 화면에 표시되지 않는다.

- head 요소에는 메타데이터 이외의 화면에 표시되는 일체의 요소를 포함시킬 수 없다.

### title tag

- title 요소는 문서의 제목을 정의한다. 정의된 제목은 브라우저의 탭에 표시된다.

### style tag

- style 요소에는 HTML 문서를 위한 style 정보를 정의한다.

### link tag

- link 요소에는 외부 리소스와의 연계 정보를 정의한다. 주로 HTML과 외부 CSS 파일을 연계에 사용된다.

### script tag

- script 요소에는 client-side JavaScript를 정의한다.

### meta tag

- meta 요소는 description, keywords, author, 기타 메타데이터 정의에 사용된다. 메타데이터는 브라우저, 검색엔진(keywords) 등에 의해 사용된다. charset 어트리뷰트는 브라우저가 사용할 문자셋을 정의한다.

  SEO(검색엔진 최적화)를 위해 검색엔진이 사용할 keywords을 정의한다.
    <meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript">

  웹페이지의 설명을 정의한다.
    <meta name="description" content="Web tutorials on HTML and CSS">

  웹페이지의 저자를 명기한다.
    <meta name="author" content="John Doe">

  웹페이지를 30초 마다 Refresh한다.
    <meta http-equiv="refresh" content="30">

### body tag

- body tag는 HTML 문서의 내용을 나타내며 웹페이지에 단 하나만 존재한다. 메타데이터를 제외한 웹페이지를 구성하는 대부분의 요소가 body 요소 내에 기술된다.

## HyperLink

- 한 텍스트에서 다른 텍스트로 건너뛰어 읽을 수 있는 이 기능을 하이퍼링크(hyper link)라 한다.

- HTML link는 hyperlink를 의미하며 a(anchor) tag가 그 역할을 담당한다.

### href 어트리뷰트

- href 어트리뷰트는 이동하고자 하는 파일의 위치(경로)를 값으로 받는다. 경로(path)란 파일 시스템 상에서 특정 파일의 위치를 의미한다.

### 디렉터리(Directory)

- 디렉터리는 파일과 다른 디렉터리를 갖는 파일 시스템 내의 존재물로서 폴더라고도 불리운다.

  - 루트 디렉터리
    파일 시스템 계층 구조 상의 최상위 디렉터리이다.
    Unix: /
    Windows: C:\

  - 홈 디렉터리
    시스템의 사용자에게 각각 할당된 개별 디렉터리이다.
    Unix: /Users/{계정명}
    Windows: C:\Users\{계정명}

  - 작업 디렉터리
    작업 중인 파일의 위치한 디렉터리이다.
    ./

  - 부모 디렉터리
    작업 디렉터리의 부모 디렉토리이다.
    ../

### 파일 경로(File path)

- 파일 경로는 파일 시스템에서 파일의 위치를 나타내는 방법이다. 경로에는 절대경로와 상대경로가 있다.

  - 절대경로(Absolute path)
    현재 작업 디렉터리와 관계없이 특정 파일의 절대적인 위치를 가리킨다. 루트 디렉터리를 기준으로 파일의 위치를 나타낸다.

  - 상대경로(Relative path)
    현재 작업 디렉터리를 기준으로 특정 파일의 상대적인 위치를 가리킨다.

- href 어트리뷰트에 사용 가능한 값은 아래와 같다.

  - 절대 URL : 웹사이트 URL (href=”http://www.example.com/default.html”)

  - 상대 URL : 자신의 위치를 기준으로한 대상의 URL (href=”html/default.html”)

  - fragment identifier : 페이지 내의 특정 id를 갖는 요소에의 링크 (href=”#top”)

  - 메일 : mailto:

  - script : href=”javascript:alert(‘Hello’);”

### target 어트리뷰트

- target 어트리뷰트는 링크를 클릭했을 때 윈도우를 어떻게 오픈할 지를 지정한다.

  - \_self 링크를 클릭했을 때 연결문서를 현재 윈도우에서 오픈한다 (기본값)

  - \_blank 링크를 클릭했을 때 연결문서를 새로운 윈도우나 탭에서 오픈한다

    - target="\_blank"를 사용해 외부 페이지를 오픈하는 경우, 이동한 외부 페이지에서 자바스크립트 코드를 사용해 악의적인 페이지로 리다이렉트할 수 있는 보안 취약점(Tabnabbing 피싱 공격)이 있다. 따라서 rel="noopener noreferrer"를 추가해 Tabnabbing 피싱 공격에 대비할 것을 권장한다.
