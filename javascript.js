function transform_form(){
  var text_form=document.getElementsByClassName("text-form");
  var pj=text_form.length;
  var attr={};
  for(var i=0;i<pj;pj=pj-1){
    var cre_div=document.createElement("div");
    var cre_span=document.createElement("span");
    var cre_label=document.createElement("label");
    var cre_input=document.createElement("input");
    var cre_br=document.createElement("br");
    attr={
      id:text_form[i].getAttribute("id"),
      val:text_form[i].getAttribute("value"),
      req:text_form[i].getAttribute("required"),
      nm:text_form[i].getAttribute("name"),
      plc:text_form[i].getAttribute("placeholder"),
      tp:text_form[i].getAttribute("type")
    };
    var cre_label_text=document.createTextNode(attr["plc"]);
    cre_div.setAttribute("class","text-box");
    if(attr["id"]!=null){
      cre_input.setAttribute("id",attr["id"]);
    }
    if(attr["val"]!=null){
      cre_input.setAttribute("value",attr["val"]);
    }
    cre_input.setAttribute("required",attr["req"]);
    if(attr["nm"]!=null){
      cre_input.setAttribute("name",attr["nm"]);
    }
    if(attr["tp"]!=null){
      cre_input.setAttribute("type",attr["tp"]);
    }
    cre_label.appendChild(cre_label_text)
    cre_div.appendChild(cre_span);
    cre_div.appendChild(cre_input);
    cre_div.appendChild(cre_br);
    cre_div.appendChild(cre_label);
    text_form[i].replaceWith(cre_div);
  }

}
function transform_radio(){
  var radio_form=document.getElementsByClassName("radio-box");
  var pj=radio_form.length;
  var attr={};
  for(var i=0;i<pj;pj=pj-1){
    var cre_div=document.createElement("label");
    var cre_span=document.createElement("span");
    var cre_label=document.createElement("label");
    var cre_input=document.createElement("input");
    var cre_br=document.createElement("br");
    attr={
      id:radio_form[i].getAttribute("id"),
      val:radio_form[i].getAttribute("value"),
      req:radio_form[i].getAttribute("required"),
      nm:radio_form[i].getAttribute("name"),
      label:radio_form[i].getAttribute("label"),
      tp:"radio"
    };
    var cre_label_text=document.createTextNode(attr["label"]);
    cre_div.setAttribute("class","radio-button");
    if(attr["id"]!=null){
      cre_input.setAttribute("id",attr["id"]);
    }
    if(attr["val"]!=null){
      cre_input.setAttribute("value",attr["val"]);
    }
    cre_input.setAttribute("required",attr["req"]);
    if(attr["nm"]!=null){
      cre_input.setAttribute("name",attr["nm"]);
    }
    cre_input.setAttribute("type",attr["tp"]);
    cre_label.appendChild(cre_label_text)
    cre_div.appendChild(cre_input);
    cre_div.appendChild(cre_span);
    cre_div.appendChild(cre_label);
    radio_form[i].replaceWith(cre_div);
  }

}
transform_form();
transform_radio();
  function check_resp(){
    var check_box=document.getElementById("checkbox-responsive");
    var menubar_responsive=document.getElementsByClassName("menubar-responsive")[0];
    if(check_box.checked){
      menubar_responsive.setAttribute("class","col-sm-12 col-md-12 menubar-responsive show");
    }
    else{
      menubar_responsive.setAttribute("class","col-sm-12 col-md-12 menubar-responsive");
    }
  }
