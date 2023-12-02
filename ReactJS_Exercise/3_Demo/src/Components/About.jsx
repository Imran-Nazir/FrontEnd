

const About = () => {
    const InlineStyles = {
        textAlign: 'justify',
        width: '500px',
        height: '400px',
        overflowX: 'scroll', 
        overflowY: 'scroll',
        lineHeight: '1.3em',
        backgroundColor: '#fff'
    }
    return (
        <div>
            <h1>About us</h1>
            <p style={InlineStyles}>Currently, React has two profiling tools. The original Profiler shows an overview of all the commits in a profiling session. For each commit, it also shows all components that rendered and the amount of time it took for them to render. We also have a beta version of a Timeline Profiler introduced in React 18 that shows when components schedule updates and when React works on these updates. Both of these profilers help developers identify performance problems in their code.

            We’ve realized that developers don’t find knowing about individual slow commits or components out of context that useful. It’s more useful to know about what actually causes the slow commits. And that developers want to be able to track specific interactions (eg a button click, an initial load, or a page navigation) to watch for performance regressions and to understand why an interaction was slow and how to fix it.

            We previously tried to solve this issue by creating an Interaction Tracing API, but it had some fundamental design flaws that reduced the accuracy of tracking why an interaction was slow and sometimes resulted in interactions never ending. We ended up removing this API because of these issues.

            We are working on a new version for the Interaction Tracing API (tentatively called Transition Tracing because it is initiated via startTransition) that solves these problems.

</p>
        </div>
    );
};

export default About;