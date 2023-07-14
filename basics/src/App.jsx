import { useState } from 'react'
import './App.css'
import { ArrayIterationMap } from './components/array-object-iteration/ArrayIterationMap';
import { ArrayIterationSort } from './components/array-object-iteration/ArrayIterationSort';
import ArrayIterationFilter from './components/array-object-iteration/ArrayIterationFilter';
import ObjectIteration from './components/array-object-iteration/ObjectIteration';
import ObjectIterationTransform from './components/array-object-iteration/ObjectIterationTransform';
import ObjectIterationNested from './components/array-object-iteration/ObjectIterationNested';
import ClickEvent from './components/click-event/ClickEvent';
import Button from './components/click-event/Button';
import { ConditionalRenderingIf, ConditionalRenderingTernary, ConditionalRenderingLogical, ConditionalRenderingInlineFunc } from './components/conditional-rendering/ConditionalRendering';
import ParentComponent from './components/props/ParentComponent';
import ApiFetch from './components/api-calling/ApiFetch';
import ApiAxios from './components/api-calling/ApiAxios';

function App() {
  return (
    <>
    {/* array, object iteration */}
      <ArrayIterationMap/>
      <ArrayIterationSort/>
      <ArrayIterationFilter/>
      <ObjectIteration/>
      <ObjectIterationTransform/>
      <ObjectIterationNested/>

    {/* click events */}
      <ClickEvent/>
      <Button/>
      
    {/* conditional ConditionalRendering */}
    <ConditionalRenderingIf/>  
    <ConditionalRenderingTernary/>
    <ConditionalRenderingLogical/>
    <ConditionalRenderingInlineFunc/>

    {/* props */}
    <ParentComponent/>


    {/* api-calling */}
    <ApiFetch/>
    <ApiAxios/>






    </>
  )
}

export default App
